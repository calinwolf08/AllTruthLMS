import { createTestCourse } from '$lib/CoursePlayer/ActivityStructure';
import type { PageServerLoad } from './$types';

import { supabase } from '$lib/supabase';
import { findCourse } from '$lib/Models/CourseQueries';
import type { Course } from '$lib/Models/Course';

let course = createTestCourse();

export const load = (async ({params}) => {
    console.log(params.course_id);

    let url = await supabase.storage.from('Scorm').getPublicUrl('TestVid/index_lms.html');

    const course: Course = await findCourse(params.course_id);

    return {
        course: course,
        url: url
    }; 
}) satisfies PageServerLoad;