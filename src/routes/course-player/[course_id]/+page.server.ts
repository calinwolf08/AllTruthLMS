import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import { supabase } from '$lib/supabase';
import { getFullCourse } from '$lib/Models/CourseQueries';

export const load = (async ({params}) => {
    console.log(params.course_id);

    let url = await supabase.storage.from('Scorm').getPublicUrl('TestVid/index_lms.html');
    console.log(url);
    const course = await getFullCourse(params.course_id);

    if (!course) {
        error(404, 'Course not found');
    }

    return {
        course: course,
        url: url
    }; 
}) satisfies PageServerLoad;