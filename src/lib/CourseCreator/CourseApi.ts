import type { Course } from "$lib/Models/Course";

export async function addNewCourse(course: Course) {
    const response = await fetch('/api/create-course', {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json',
        },
    });

    return await response.json();
}