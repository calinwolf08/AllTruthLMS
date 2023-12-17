import { writable } from 'svelte/store';
import { createDefaultActivity, createDefaultCourse } from '../Models/Course';

export const currentCourse = writable(createDefaultCourse());
export const currentActivity = writable(createDefaultActivity());
