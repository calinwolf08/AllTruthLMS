import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

import { getFullCourse } from '$lib/Models/CourseQueries';

export const load = (async ({params}) => {
    // let url = await supabase.storage.from('Scorm').getPublicUrl('TestVid/index_lms.html');
    
    const course = await getFullCourse(params.course_id);

    return {
        course
    }; 
}) satisfies PageServerLoad;