import type { CourseSelect, SectionSelect } from "$lib/kysely/kysely"
import type { CourseSection, ActivityType } from "kysely-codegen"

export type Course = CourseSelect & {
    sections: Section[],
}

export type Section = SectionSelect & Pick<CourseSection, 'order'> & {
    activities: Activity[]
}

type ActivityBase = {
    created_at: Date,
    id: string,
    activity_id: string,
    activity_type: ActivityType,
    name: string,
    order: number,
}

export type ScormActivity = ActivityBase & {
    scorm_data_id: string | null, 
    player_url: string,
}

export type VideoActivity = ActivityBase & {
    url: string
}

export type Activity = ScormActivity | VideoActivity;

export const createDefaultCourse = function (): Course {
    return {
        id: '',
        name: '',
        created_at: new Date(),
        sections: []
    };
}

export const createDefaultSection = function (): Section {
    return {
        created_at: new Date(),
        id: '',
        name: '',
        order: -1,
        activities: []
    }
}

export const createDefaultActivity = function (): Activity {
    return {
        created_at: new Date(),
        id: '',
        activity_id: '',
        activity_type: "Scorm", 
        name: '',
        order: -1,
        scorm_data_id: '',
        player_url: '', 
    };
}
