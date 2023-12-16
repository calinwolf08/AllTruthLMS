import { db, type CourseSelect, type SectionSelect } from "$lib/kysely/kysely";
import type { Course, Section, Activity } from "./Course";
import { error } from "@sveltejs/kit";

export async function getAllCourses(): Promise<CourseSelect[]> {
    let courses = await db.selectFrom('course').selectAll().execute();

    if (!courses) {
        error(404, "Courses not found.");
    }

    return courses;
}

export async function getFullCourse(id: string): Promise<Course | undefined> {
    
    let courseSelect = await getCourse(id);
    
    if (!courseSelect) {
        error(404, 'Course not found');
        return undefined;
    }
    
    const sections = await getFullSections(id);
    const course = {...courseSelect, sections};
    
    return course;
}

async function getCourse(id:string): Promise<CourseSelect | undefined> {
    return await db.selectFrom('course')
        .where('course.id', '=', id)
        .selectAll()
        .executeTakeFirst();
}

async function getFullSections(course_id:string): Promise<Section[]> {
    const sectionSelects = await getCourseSections(course_id);

    if (!sectionSelects) {
        error(404, 'Sections not found: ' + course_id);
        return [];
    }

    let sections: Section[] = [];

    sectionSelects.forEach(async (sectionSelect) => {
        sections.push({ ...sectionSelect, activities: await getFullActivities(sectionSelect.id)})
    });
    
    return sections;
}

async function getCourseSections(course_id:string): Promise<SectionSelect[] | undefined> {
    const sections =  await db.selectFrom('course_section')
        .where('course_id', '=', course_id)
        .select(['section_id', 'order'])
        .execute();

    if (typeof sections == undefined) {
        error(404, 'No sections found: ' + course_id);
    } else if (!sections.length) {
        return [];
    }
    
    const sectionIds = sections
        .filter((value) => { value.section_id })
        .map((value) => { return value.section_id });


    const sectionSelects = await db.selectFrom('section')
        .where('section.id', 'in', sectionIds)
        .selectAll()
        .execute();

    return sectionSelects;
}

async function getFullActivities(section_id: string): Promise<Activity[]> {
    const activities = await db.selectFrom('section_activity')
        .where('section_id', '=', section_id)
        .select(['activity_id', 'order'])
        .execute();

    if (!activities) {
        error(404, 'Activities not found: ' + section_id);
        return [];
    }

    const activityIds = activities
        .filter((value) => { value.activity_id })
        .map((value) => { return value.activity_id });
    
    const activitySelects = await db.selectFrom('activity')
        .where('id', 'in', activityIds)
        .selectAll()
        .execute();

    if (!activitySelects) {
        error(404, 'Activities not found: ' + section_id);
        return [];
    }

    const videoActivities = activitySelects.filter((value) => {return value.activity_type == 'Video'})
    const scormActivities = activitySelects.filter((value) => {return value.activity_type == 'Scorm'})

    return [];
}
