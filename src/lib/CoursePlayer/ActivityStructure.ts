import type { TreeViewNode } from "@skeletonlabs/skeleton";
import { redirect } from "@sveltejs/kit";

type ActivityId = number;
type SectionId = number;
type CourseId = number;

type SCORM_Activity = {
    path: string
}

type HTML_Activity = {
    value: string
}

export type Activity = 
{
    activityId: ActivityId
    isComplete: boolean,
    name: string,
} & ({
    settings: SCORM_Activity
} | {
    settings: HTML_Activity
});

// export interface Activity {
//     activityId: ActivityId;
//     isComplete : boolean;
//     name : string;
// }

interface Section {
    sectionId: SectionId;
    activities : Activity[];
    name : string;
}

export interface Course {
    courseId : CourseId;
    sections : Section[];
    name : string;
    isComplete : boolean;
    currentActivityId: number;
}

let createActivity = function(name: string, activityId: ActivityId) : Activity {
    return { activityId: activityId, isComplete: false, name: name, settings: {path: ""} };
}

let createSection = function(name: string, sectionId: SectionId) : Section {
    return { sectionId: sectionId, activities: [], name: name };
}

export const createTestCourse = function() : Course {
    let a1 = createActivity("a1", 0), a2 = createActivity("a2", 1), a3 = createActivity("a3", 2);
    let a4 = createActivity("a4", 5), a5 = createActivity("a5", 4);

    switch (a2.type) {
        case "SCORM":
        case "HTML":
    }
    
    let s1 = createSection("s1", 0), s2 = createSection("s2", 1), s3 = createSection("s3", 2);
    
    s1.activities = [a1, a2];
    s2.activities = [a3, a4];
    s3.activities = [a5];
    
    return { sections: [s1,s2,s3], name: "course", isComplete: false, currentActivityId: 1, courseId: 1 };
}

export const createDefaultCourse = function() : Course {
    return {courseId: -1, name:"", isComplete:false, sections:[], currentActivityId:-1};
}

export const createDefaultActivity = function() : Activity {
    return {activityId: -1, name:"", isComplete:false, type:ActivityType.HTML, value: ""};
}

export function findCurrentActivity(course: Course) : Activity {
    let firstActivity: Activity | undefined;

    for (let section of course.sections) {
        for (let activity of section.activities) {
            if (activity.activityId == course.currentActivityId) {
                return activity;
            } else if (firstActivity === undefined) {
                firstActivity = activity;
            }
        }
    }

    if (firstActivity !== undefined) {
        return firstActivity
    } else {
        alert("Course has no activities.");
        throw redirect(302, "/");
    }
}
