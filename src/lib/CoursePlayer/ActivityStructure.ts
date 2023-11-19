import type { TreeViewNode } from "@skeletonlabs/skeleton";

export interface Activity {
    isComplete : boolean;
    isSelected: boolean;
    name : string;
}

interface Section {
    activities : Activity[];
    name : string;
}

export interface Course {
    course_id : number;
    sections : Section[];
    name : string;
    isComplete : boolean;
    currentActivity: number; 
}

let createActivity = function(name: string, isSelected: boolean = false) : Activity {
    return { isComplete: false, isSelected: isSelected, name: name };
}

let createSection = function(name: string) : Section {
    return { activities: [], name: name };
}

export const createTestCourse = function() : Course {
    let a1 = createActivity("a1"), a2 = createActivity("a2"), a3 = createActivity("a3");
    let a4 = createActivity("a4"), a5 = createActivity("a5");
    
    let s1 = createSection("s1"), s2 = createSection("s2"), s3 = createSection("s3");
    
    s1.activities = [a1, a2];
    s2.activities = [a3, a4];
    s3.activities = [a5];

    console.log('here:');
    console.log(s1);
    
    return { sections: [s1,s2,s3], name: "course", isComplete: false, currentActivity: 1, course_id: 1 };
}
