import { writable } from 'svelte/store';
import { createDefaultActivity, createDefaultCourse } from './ActivityStructure';

export const currentCourse = writable(createDefaultCourse());
export const currentActivity = writable(createDefaultActivity());