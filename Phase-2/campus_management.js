let students = [
    {
        id: 1,
        name: "Eimmiit",
        age: 22,
        department: "Computer Science",
        level: 400,
        wallet: 50000
    },
    {
        id: 2,
        name: "Adesewa",
        age: 20,
        department: "Mass Communication",
        level: 300,
        wallet: 500000
    },
    {
        id: 3,
        name: "Mowariri",
        age: 17,
        department: "Aeronautic Engineer",
        level: 100,
        wallet: 100000000
    }
];

let addedStudents = [
    {
        id: 4,
        name: "Inioluwa",
        age: 14,
        department: "Mechanical Engineer",
        level: 200,
        wallet: 200000
    },
    {
        id: 5,
        name: "Orimisan",
        age: 17,
        department: "Computer Engineer",
        level: 600,
        wallet: 700000000
    }
]

let courses = [
    {
        id: 101,
        name: "JavaScript",
        department: "Computer Science",
        units: 3
    },
    {
        id: 102,
        name: "Mass peeps",
        department: "Mass Communication",
        units: 4
    },
    {
        id: 103,
        name: "Aerospace",
        department: "Aeronautic Engineer",
        units: 6
    }
];

let addedCourses = [
    {
        id: 104,
        name: "Technical Engineer",
        department: "Mechanical Engineer",
        units: 2
    },
    {
        id: 105,
        name: "Embedded system",
        department: "Computer Engineer",
        units: 6
    }
]

let result = [
    {
        studentId: 1,
        courseId: 101,
        score: 90
    },
    {
        studentId: 2,
        courseId: 102,
        score: 85
    },
    {
        studentId: 3,
        courseId: 103,
        score: 98
    }
]

let enrollment = []


// STUDENT MANAGEMENTS
// STUDENT MANAGEMENTS
// STUDENT MANAGEMENTS

function findStudents(students, studentId) {
    return students.filter(function ({ id }) {
        return id === studentId;
    })
}
console.log(findStudents(students, 2));

function findByDepartment(students, dept) {
    return students.filter(function ({ department }) {
        return department === dept;
    })
}
console.log(findByDepartment(students, 'Computer Science'))

function updateStudent(students, otherStudents) {
    students.push(...otherStudents);
    return students;
}
console.log(updateStudent(students, addedStudents))

function deleteStudent(studentName) {
    let updateStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].name !== studentName) {
            updateStudents.push(students[i]);
        }
    }
    students = updateStudents
    return students;
}
console.log(deleteStudent("Eimmiit"));

function findStudent(students, studentsName) {
    return students.find(function ({ name }) {
        return name === studentsName;
    })
}
console.log(findStudent(students, 'Adesewa'))

function findAllStudent(students) {
    return students.map(function (student) {
        return student.name;
    })
}
console.log(findAllStudent(students));



// COURSE MANAGEMENT
// COURSE MANAGEMENT
// COURSE MANAGEMENT\
function addCourses(courses, otherCourses) {
    courses.push(...otherCourses);
    return courses
}
console.log(addCourses(courses, addedCourses))

function findCourse(course) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].name === course) {
            return courses[i]
        };
    };
}
console.log(findCourse("Embedded system"));

function deleteCourse(courseName) {
    let updateCourses = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].name !== courseName) {
            updateCourses.push(courses[i]);
        }
    }
    courses = updateCourses;
    return courses;
}
console.log(deleteCourse("JavaScript"));

function listCourses(courses) {
    let courseList = []
    for (let i = 0; i < courses.length; i++) {
        courseList.push(courses[i].name);
    }
    return courseList;
}
console.log(listCourses(courses))

function enrollStudent(studentName, courseName) {
    let enrolledStudent = {}
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === studentName) {
            enrolledStudent.studentId = students[i].id;
        }
    }
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].name === courseName) {
            enrolledStudent.courseId = courses[i].id;
        }
    }
    return enrolledStudent;
}

function addEnrolledStudents(studentId, courseId) {
    enrollment.push(enrollStudent(studentId, courseId))
    return enrollment;
}

console.log(addEnrolledStudents("Inioluwa", "Aerospace"));
console.log(addEnrolledStudents("Mowariri", "Embedded system"));
console.log(addEnrolledStudents("Adesewa", "Technical Engineer"));

function getAllEnrolledStudents(students, enrollment) {
    // return enrollment.filter(function({studentId}){
    //     return studentId === students.id;
    // })
    let enrolledNameList = [];
    for (let i = 0; i < enrollment.length; i++) {
        for (let j = 0; j < students.length; j++) {
            if (students[j].id === enrollment[i].studentId) {
                enrolledNameList.push(students[j].name);
            }
        }
    }
    return enrolledNameList;

}
console.log(getAllEnrolledStudents(students, enrollment))


// RESULT MANAGEMENT
// RESULT MANAGEMENT
// RESULT MANAGEMENT
// RESULT MANAGEMENT

function addScore(studentsEnroll, studentId, score) {
    for (let i = 0; i < studentsEnroll.length; i++) {
        if (studentsEnroll[i].studentId === studentId) {
            studentsEnroll[i].score = score;
        }
    }
    return studentsEnroll;
}
console.log(addScore(enrollment, 2, 85));
console.log(addScore(enrollment, 3, 32));
console.log(addScore(enrollment, 4, 98));

function totalScore(enrollment) {
    let totalSc = enrollment.reduce(function (total, { score }) {
        return total + score;
    }, 0)
    return totalSc;
}
console.log(totalScore(enrollment));

let average = totalScore(enrollment) / enrollment.length;
console.log(average);

function highestScore(enrollment) {
    let highestSc = enrollment.reduce(function (highest, { score }) {
        if (highest < score) {
            highest = score;
        }
        return highest;
    }, 0);
    return highestSc;
}
console.log(highestScore(enrollment));

function lowestScore(enrollment){
    let lowestScore = enrollment[0].score;
    let lowStudentScore = enrollment.reduce(function(lowest, {score}){
        if(lowest > score){
            lowest = score
        }
        return lowest;
    }, lowestScore);
    return lowStudentScore;
}
console.log(lowestScore(enrollment));

function passedScore(enrollment){
    let passed = enrollment.filter(function({score}){
        if(score >= 50){
            return score;
        }
    })

    return getAllEnrolledStudents(students, passed);   
}
console.log(passedScore(enrollment))

function failedScore(enrollment){
    let failed = enrollment.filter(function({score}){
        if(score <= 50){
            return score;
        }
    })
    return getAllEnrolledStudents(students, failed);
}
console.log(failedScore(enrollment))
