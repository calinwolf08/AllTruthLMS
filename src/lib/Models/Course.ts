import type { CourseSelect, ScormActivitySelect, SectionSelect, VideoActivitySelect } from "$lib/kysely/kysely"
import type { ActivityType } from "kysely-codegen"

export function getEmptyCourse() {
    return {
        id: '',
        name:'',
        created_at: new Date(),
        sections:[]
    }
}

export type Course = CourseSelect & {
    sections: Section[],
}

export type Section = SectionSelect & {
    activities: Activity[]
}

export type Activity = {
    id: string,
    name: string,
    activity_type: ActivityType
}

export type ScormActivity = ScormActivitySelect;
export type VideoActivity = VideoActivitySelect;