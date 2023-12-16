import type { CourseSelect } from "$lib/kysely/kysely"
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

export type Section = {
    id: string,
    name: string,
    activities: Activity[]
}

export type Activity = {
    id: string,
    name: string,
    activity_type: ActivityType
}