import { db, type CourseSelect, type SectionSelect } from "$lib/kysely/kysely";
import type { Course, Section, Activity, ScormActivity, VideoActivity } from "./Course";
import { error } from "@sveltejs/kit";

export async function getAllCourses(): Promise<CourseSelect[]> {
    let courses = await db.selectFrom('course').selectAll().execute();

    if (!courses) {
        error(404, "Courses not found.");
    }

    return courses;
}

export async function getFullCourse(id: string): Promise<Course> {
    let courseSelect = await getCourse(id);
    const sections = await getFullSections(id);
    const course = {...courseSelect, sections};
    
    return course;
}

async function getCourse(id:string): Promise<CourseSelect> {
    const courseSelect = await db.selectFrom('course')
        .where('course.id', '=', id)
        .selectAll()
        .executeTakeFirst();

    if (courseSelect === undefined) {
        error(404, 'Course not found: ' + id);
    }

    return courseSelect;
}

async function getFullSections(course_id:string): Promise<Section[]> {
    const sections = await getCourseSections(course_id);

    console.log('sections');
    console.log(sections);

    const fullSections: Section[] = await Promise.all(sections.map(async (section) => {
        return { ...section, activities: await getActivities(section.id)};
    }));
    
    return fullSections;
}

async function getCourseSections(course_id:string): Promise<Section[]> {
    let sectionsSelects = await db.selectFrom('course_section')
        .where('course_id', '=', course_id)
        .innerJoin('section', 'section_id', 'section.id')
        .select(['order', 'section.created_at', 'section.id', 'section.name'])
        .orderBy('order asc')
        .execute();

    const sections = sectionsSelects.map((sectionSelect) => { return {...sectionSelect, activities:[]}});

    return sections;
}

async function getActivities(section_id: string): Promise<Activity[]> {
    const activities: Activity[] = await db.selectFrom('section_activity')
        .where('section_id', '=', section_id)
        .innerJoin('activity', 'activity.id', 'section_activity.activity_id')
        .select(['order', 'activity.id', 'activity.name', 'activity.activity_type', 'activity.created_at'])
        .orderBy('order asc')
        .execute();
    
    return activities;
}
