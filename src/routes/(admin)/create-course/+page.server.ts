import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { tmpdir } from 'os';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
// import JSZip from 'jszip';
// import pako from 'pako';
import {unzip} from 'unzipit';
import { S3 } from 'aws-sdk';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
	uploadScorm: async (event) => {
        const data = await event.request.formData();
        const file = await data.get('scormFile') as File;
        
        console.log("file: ", file, typeof file);

        const uploadDir = join(tmpdir(), 'uploads');

        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir);
        }
        
        try {
            let extractedFiles = await unzip(file);
            console.log(extractedFiles);
            
        } catch (error) {
            console.error('Error extracting zip file:', error);
        }

        return {
            success: true
        };
	},
	saveCourse: async (event) => {
        console.log("in save course action");
        console.log(event);

        let data = await event.request.formData();

        console.log(data);

        return {
            success: true
        };
	}
} satisfies Actions;
