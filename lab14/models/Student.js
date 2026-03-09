import { Person } from "./Person.js";

export class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    viewCourses() {
        const courseList = this.courses.map(c => c.title).join(", ");
        console.log(`${this.name} вивчає: ${courseList}`);
    }
}