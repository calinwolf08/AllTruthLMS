import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { json } from '@sveltejs/kit';

import type { Course } from '$lib/Models/Course';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({request}) => {
        // handle course
        let data = await request.formData();

        console.log(data);

        return {
            success: true
        };
    }
} satisfies Actions;