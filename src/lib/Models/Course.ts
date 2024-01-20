import type { CourseSelect, ScormActivitySelect, SectionSelect, VideoActivitySelect, ActivitySelect, SectionActivitySelect, ScormDataSelect } from "$lib/kysely/kysely"
import type { CourseSection, ScormData } from "kysely-codegen"

export type Course = CourseSelect & {
    sections: Section[],
}

export type Section = SectionSelect & Pick<CourseSection, 'order'> & {
    activities: Activity[]
}

export type Activity = ScormActivity | VideoActivity;

export type ScormActivity = ScormActivitySelect & Pick<ActivitySelect, 'activity_type' | 'name'> & Pick<SectionActivitySelect, 'order'> & Pick<ScormData, 'player_url'>;
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
        activity_type: 'Scorm',
        name: '',
        order: -1,
        scorm_data_id: '',
        player_url: '', 
    };
}
