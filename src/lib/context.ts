import { writable, type Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import { type Activity, type ScormActivity, createDefaultActivity } from "$lib/Models/Course";

type ActivityContext = Writable<Activity>; 
type ScormContext = Writable<ScormActivity>;

export function setActivity() {
    let activity = writable<Activity>(createDefaultActivity());
    setContext('activity', activity);
}

export function getActivity(): ActivityContext {
    return getContext<ActivityContext>('activity');
}

export function getScormActivity(): ScormContext {
    const activity = getContext<ActivityContext>('activity');

    return activity as ScormContext;
}