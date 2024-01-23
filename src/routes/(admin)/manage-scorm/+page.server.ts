import type { PageServerLoad } from './$types';
import type { CourseSelect, ScormDataSelect } from '$lib/kysely/kysely';
import { getAllCourses, getAllScorm } from '$lib/Models/CourseQueries';

export const load = (async () => {
    const scormData: ScormDataSelect[] = await getAllScorm();

    return {
        scormData
    };
}) satisfies PageServerLoad;