import type { TreeViewNode } from "@skeletonlabs/skeleton";

export interface Activity {
    isComplete : boolean;
    name : string;
}

interface Section {
    activities : Activity[];
    name : string;
}

interface Lesson {
    sections : Section[];
    name : string;
}

let createActivity = function(name: string) : Activity {
    return { isComplete: false, name: name };
}

let createSection = function(name: string) : Section {
    return { activities: [], name: name };
}

export const createTestLesson = function() : Lesson {
    let a1 = createActivity("a1"), a2 = createActivity("a2"), a3 = createActivity("a3");
    let a4 = createActivity("a4"), a5 = createActivity("a5");
    
    let s1 = createSection("s1"), s2 = createSection("s2"), s3 = createSection("s3");
    
    s1.activities = [a1, a2];
    s2.activities = [a3, a4];
    s3.activities = [a5];
    
    return { sections: [s1,s2,s3], name: "lesson" };
}
