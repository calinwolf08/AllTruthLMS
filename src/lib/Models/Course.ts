import type Scorm from "$lib/ActivityTypes/Scorm.svelte"
import type { CourseSelect, ScormActivitySelect, SectionSelect, VideoActivitySelect, ActivitySelect, SectionActivitySelect } from "$lib/kysely/kysely"

export type Course = CourseSelect & {
    sections: Section[],
}

export type Section = SectionSelect & {
    order: number | null,
    activities: Activity[]
}

// Data field initialized as |undefined| and only fetched when needed in the Course Player
export type Activity = Pick<SectionActivitySelect, 'order'> & ActivitySelect & {
    data?: ScormActivity | VideoActivity
};

export type ScormActivity = ScormActivitySelect;
export type VideoActivity = VideoActivitySelect;

export enum ActivityType {
    SCORM = "Scorm",
    VIDEO = "Video",
}

export const createDefaultCourse = function() : Course {
    return {
        id: '',
        name: '',
        created_at: new Date(),
        sections: []
    };
}

export const createDefaultActivity = function() : Activity {
    return {
        id: '',
        name: '',
        created_at: new Date(),
        order: -1,
        activity_type: 'Scorm'
    };
}
