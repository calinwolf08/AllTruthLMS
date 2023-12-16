import type { PageServerLoad } from './$types';
import { db, type CourseSelect } from '$lib/kysely/kysely';

export const load = (async () => {
    const courses: CourseSelect[] = await db.selectFrom('course').selectAll().execute();

    return {
        courses
    };
}) satisfies PageServerLoad;