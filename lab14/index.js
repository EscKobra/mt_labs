import { Course } from "./models/Course.js";
import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";

const teacher = new Teacher("Ігор Тупичак");
const courseWeb = new Course("Програмування в Interntt");

const studentVladyslav = new Student("Владислав");
const studentAnatolii = new Student("Анатолій");

teacher.addCourse(courseWeb);

courseWeb.addStudent(studentVladyslav);
courseWeb.addStudent(studentAnatolii);

studentVladyslav.addCourse(courseWeb);
studentAnatolii.addCourse(courseWeb);

console.log(teacher.getInfo());
console.log(studentVladyslav.getInfo());

console.log("Дані курсу:", courseWeb);

studentVladyslav.viewCourses();