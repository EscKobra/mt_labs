function Person(name) {
    this.name = name;
    this.courses = [];
}

Person.prototype.viewCourses = function() {
    const courseNames = this.courses.map(c => c.title).join(", ");
    console.log(this.name + " має такі курси: " + (courseNames || "немає"));
};

Person.prototype.addCourse = function(course) {
    this.courses.push(course);
};

function Teacher(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

function Student(name) {
    Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Course(title) {
    this.title = title;
    this.students = [];
}

Course.prototype.addStudent = function(student) {
    this.students.push(student);
    student.addCourse(this);
};

const teacherIhor = new Teacher("Ігор Тупичак");

const courseWeb = new Course("Програмування в Internet");
const courseIoT = new Course("Основи IoT");

teacherIhor.addCourse(courseWeb);
teacherIhor.addCourse(courseIoT);

const studentVlad = new Student("Влад");
const studentAnatolii = new Student("Анатолій");
const studentYura = new Student("Юра");

courseWeb.addStudent(studentVlad);
courseWeb.addStudent(studentAnatolii);
courseIoT.addStudent(studentVlad);
courseIoT.addStudent(studentYura);

teacherIhor.viewCourses();
studentVlad.viewCourses();
studentAnatolii.viewCourses();
studentYura.viewCourses();
console.log(courseWeb);