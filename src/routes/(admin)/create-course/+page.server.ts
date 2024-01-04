import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { tmpdir } from 'os';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
// import JSZip from 'jszip';
// import pako from 'pako';
import { unzip } from 'unzipit';
import type { ZipEntry, ZipInfo } from 'unzipit';
import { S3 } from 'aws-sdk';
import { PutObjectCommand, CopyObjectCommand, S3Client, type CopyObjectCommandInput, type PutObjectCommandInput } from '@aws-sdk/client-s3';
import { S3_ACCESS_KEY, S3_BUCKET, S3_REGION, S3_SECRET_KEY, S3_UNZIPPED_SCORM_FOLDER, S3_SCORM_SCRIPT_LOCATION, S3_SCORM_SCRIPT_NAME } from '$env/static/private';
import type { S } from 'vitest/dist/types-198fd1d9';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    uploadScorm: async (event) => {
        const data = await event.request.formData();
        const file = await data.get('scormFile') as File;
        const uploadDir = join(tmpdir(), 'uploads');

        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir);
        }

        let url = '';
        let success = true;

        try {
            let extractedFiles = await unzip(file);
            const directory = file.name.split('.')[0];
            url = await uploadScormToS3(extractedFiles, directory);
        } catch (error) {
            console.error('Error extracting zip file:', error);
            success = false;
        }

        return {
            success,
            url
        };
    },
    saveCourse: async (event) => {
        let data = await event.request.formData();

        console.log(data);

        return {
            success: true,
        };
    }
} satisfies Actions;

async function uploadScormToS3(extractedFiles: ZipInfo, directory: string): Promise<string> {
    const client = new S3Client({
        region: S3_REGION,
        credentials: {
            accessKeyId: S3_ACCESS_KEY,
            secretAccessKey: S3_SECRET_KEY,
        }
    });

    const s3key = S3_UNZIPPED_SCORM_FOLDER + '/' + directory + '/';
    const scriptTargetLocation = s3key + S3_SCORM_SCRIPT_NAME;

    await copyScormPlayerScriptToS3(scriptTargetLocation, client);
    await uploadScormFilesToS3(extractedFiles, s3key, client);

    return scriptTargetLocation;
}

async function copyScormPlayerScriptToS3(scriptTargetLocation: string, client: S3Client) {
    const s3Params: CopyObjectCommandInput = {
        Bucket: S3_BUCKET,
        CopySource: S3_SCORM_SCRIPT_LOCATION,
        Key: scriptTargetLocation,
        ContentType: 'text/html',
        ContentDisposition: 'inline',
    };

    const command = new CopyObjectCommand(s3Params);

    try {
        await client.send(command);
        console.log('File copied to', scriptTargetLocation, ': ', S3_SCORM_SCRIPT_LOCATION);
    } catch (error) {
        console.log('Error copying', S3_SCORM_SCRIPT_LOCATION, 'to', scriptTargetLocation, ': ', error);
        throw error;
    }
}

async function uploadScormFilesToS3(extractedFiles: ZipInfo, s3key: string, client: S3Client) {
    const keys = Object.keys(extractedFiles.entries);

    const uploadPromises = keys.map(async (key: string) => {
        const zipEntry = extractedFiles.entries[key];

        const contentType = getContentType(zipEntry.name);

        const s3Params: PutObjectCommandInput = {
            Bucket: S3_BUCKET,
            Key: s3key + zipEntry.name,
            Body: Buffer.from(await zipEntry.arrayBuffer()),
            ContentDisposition: 'inline',
            ContentType: contentType,
        };

        const command = new PutObjectCommand(s3Params)

        try {
            // await s3.upload(s3Params).promise();
            await client.send(command);
            console.log(`File uploaded to ${s3key}: ${zipEntry.name}`);
        } catch (error) {
            console.error(`Error uploading ${zipEntry.name} to S3:`, error);
            throw error;
        }
    })

    await Promise.all(uploadPromises);
    console.log('Finished Uploading');
}

function getContentType(name: string): string | undefined {
    if (name.endsWith('.html')) {
        return 'text/html';
    } else if (name.endsWith('.js')) {
        return 'text/javascript';
    } else if (name.endsWith('.css')) {
        return 'text/css';
    }

    return undefined;
}