import { db, type CourseSelect } from "$lib/kysely/kysely";
import { redirect } from "@sveltejs/kit";
import { getEmptyCourse, type Course, type Section, type Activity } from "./Course";
import { error } from "@sveltejs/kit";

export async function findCourse(id: string): Promise<Course> {
    let course: Course = getEmptyCourse();
    let sections: Section[] = [];
    let activities: Activity[] = [];

    let courseSelect = await db.selectFrom('course')
        .where('course.id', '=', id)
        .selectAll()
        .executeTakeFirst();

    if (!courseSelect) {
        error(404, "Course not found: " + id);
        return course;
    } 
    
    return course;
}
