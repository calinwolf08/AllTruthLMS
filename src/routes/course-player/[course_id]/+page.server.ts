import { createTestCourse } from '$lib/CoursePlayer/ActivityStructure';
import type { PageServerLoad } from '../$types';

import { db } from '$lib/kysely';
import { supabase } from '$lib/supabase';

let course = createTestCourse();

export const load = (async () => {
    
    let url = await supabase.storage.from('Scorm').getPublicUrl('TestVid/index_lms.html');
    console.log(url);

    const test = await db.selectFrom('MyTest').selectAll().execute();
    console.log(test);

    return {
        course: course,
        url: url
    }; 
}) satisfies PageServerLoad;