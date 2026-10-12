class Course {
    constructor(courseId, courseName, courseUnits) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseUnits = courseUnits
        this.score = 0;
    }

    courseIntro() {
        return `${this.courseName} with id of ${this.courseId} having ${this.courseUnits} units`
    }
}

export default Course;



