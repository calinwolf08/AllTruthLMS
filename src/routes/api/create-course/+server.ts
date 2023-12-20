import { json } from '@sveltejs/kit';

import type { Course } from '$lib/Models/Course';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request}) => {
    let course:Course = await request.json();

    console.log(course);

    return json('123');
};