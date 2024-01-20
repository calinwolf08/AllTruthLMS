import { writable, type Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import { type Course, type Activity, type ScormActivity, createDefaultCourse, createDefaultActivity } from "$lib/Models/Course";

type CourseContext = Writable<Course>;
type ActivityContext = Writable<Activity>; 
type ScormContext = Writable<ScormActivity>;

export function setCourse(course: Course) {
    const courseStore = writable<Course>(course);
    setContext('course', courseStore);
}

export function getCourse(): CourseContext {
    return getContext<CourseContext>('course');
}

export function setActivity() {
    const activity = writable<Activity>(createDefaultActivity());
    setContext('activity', activity);
}

export function getActivity(): ActivityContext {
    return getContext<ActivityContext>('activity');
}

export function getScormActivity(): ScormContext {
    const activity = getContext<ActivityContext>('activity');

    return activity as ScormContext;
}