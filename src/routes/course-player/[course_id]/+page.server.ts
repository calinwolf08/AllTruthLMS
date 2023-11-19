import { createTestCourse } from '$lib/CoursePlayer/ActivityStructure';
import type { PageServerLoad } from '../$types';

let course = createTestCourse();

console.log("here");

export const load = (async () => {
    return {
        course: course
    };
}) satisfies PageServerLoad;