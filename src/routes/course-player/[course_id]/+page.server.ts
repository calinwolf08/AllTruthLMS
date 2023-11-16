import { createTestCourse } from '$lib/CoursePlayer/ActivityStructure';
import type { PageServerLoad } from '../$types';

let course = createTestCourse();

export const load = (async () => {
    return {
        course: course
    };
}) satisfies PageServerLoad;