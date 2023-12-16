import type { PageServerLoad } from './$types';
import type { CourseSelect } from '$lib/kysely/kysely';
import { getAllCourses } from '$lib/Models/CourseQueries';

export const load = (async () => {
    const courses: CourseSelect[] = await getAllCourses();

    return {
        courses
    };
}) satisfies PageServerLoad;