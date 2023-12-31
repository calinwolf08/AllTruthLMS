import type Scorm from "$lib/ActivityTypes/Scorm.svelte"
import type { CourseSelect, ScormActivitySelect, SectionSelect, VideoActivitySelect, ActivitySelect, SectionActivitySelect } from "$lib/kysely/kysely"
import type { CourseSection } from "kysely-codegen"

export type Course = CourseSelect & {
    sections: Section[],
}

export type Section = SectionSelect & Pick<CourseSection, 'order'> & {
    activities: Activity[]
}

// Data field initialized as |undefined| and only fetched when needed in the Course Player
export type Activity = ScormActivity | VideoActivity;

export type ScormActivity = ScormActivitySelect & Pick<ActivitySelect, 'activity_type' | 'name'> & Pick<SectionActivitySelect, 'order'>;
export type VideoActivity = VideoActivitySelect & Pick<ActivitySelect, 'activity_type' | 'name'> & Pick<SectionActivitySelect, 'order'>;

export enum ActivityType {
    SCORM = "Scorm",
    VIDEO = "Video",
}

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
        url: "",
        activity_type: 'Scorm',
        name: '',
        order: -1,
    };
}
