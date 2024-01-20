import { writable } from 'svelte/store';
import { createDefaultActivity, createDefaultCourse } from '$lib/Models/Course';

export const currentCourse = writable(createDefaultCourse());
export const currentActivity = writable(createDefaultActivity());
