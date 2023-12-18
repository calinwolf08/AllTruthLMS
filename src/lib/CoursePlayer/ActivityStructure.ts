import type { TreeViewNode } from "@skeletonlabs/skeleton";
import { redirect } from "@sveltejs/kit";
import type { HtmlTagDescriptor } from "vite";

export enum ActivityType {
    SCORM = "SCORM",
    HTML = "HTML",
    TEST = "TEST"
}

// type ActivityData = string | number;
type ActivityData = {
    type: ActivityType.SCORM
    value: string;
} | {
    type: ActivityType.HTML
    value: string
} | {
    type: ActivityType.TEST
    value: number
};

export interface Activity {
    activityId: number;
    isComplete: boolean;
    title: string;
    data: ActivityData
}

interface Section {
    sectionId: number;
    activities : Activity[];
    title : string;
}

export interface Course {
    courseId: number;
    sections: Section[];
    title: string;
    isComplete: boolean;
    currentActivityId: number;
}

let createActivity = function(title: string, activityId: number) : Activity {
    return {
        activityId: activityId, 
        isComplete:false, 
        title:title, 
        data: {value:"<p>Activity: " + activityId.toString() + "</p>", type: ActivityType.HTML}
    };
}

let createSection = function(title: string, sectionId: number) : Section {
    return { sectionId: sectionId, activities: [], title: title };
}

export const createTestCourse = function() : Course {
    let a1 = createActivity("a1", 0), a2 = createActivity("a2", 1), a3 = createActivity("a3", 2);
    let a4 = createActivity("a4", 5), a5 = createActivity("a5", 4);

    a2.data = {type: ActivityType.SCORM, value:"https://iinyqzjlbioqrpwqrjhh.supabase.co/storage/v1/object/sign/Scorm/TestBridge/index_lms.html?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTY29ybS9UZXN0QnJpZGdlL2luZGV4X2xtcy5odG1sIiwiaWF0IjoxNzAwNjMzMjU1LCJleHAiOjE3MDEyMzgwNTV9.6woFqFfEVmxcEJf6_yLfGBWo9BFRUuoZr1eMiT0dEag&t=2023-11-22T06%3A07%3A33.987Z"};

    let s1 = createSection("s1", 0), s2 = createSection("s2", 1), s3 = createSection("s3", 2);

    s1.activities = [a1, a2];
    s2.activities = [a3, a4];
    s3.activities = [a5];
    
    return { sections: [s1,s2,s3], title: "course", isComplete: false, currentActivityId: 1, courseId: 1 };
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
