import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { json } from '@sveltejs/kit';

import type { Course } from '$lib/Models/Course';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
	uploadScorm: async (event) => {
		// TODO log the user in
        console.log("in form action");
        console.log(event);

        let data = await event.request.formData();

        console.log(data);

        return {
            success: true
        };
	},
	saveCourse: async (event) => {
		// TODO register the user
        console.log("in save course action");
        console.log(event);

        let data = await event.request.formData();

        console.log(data);

        return {
            success: true
        };
	}
} satisfies Actions;
