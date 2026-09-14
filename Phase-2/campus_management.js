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
console.log(deleteCourse("Embedded system"));

function listCourses(courses) {
    let courseList = []
    for (let i = 0; i < courses.length; i++) {
        courseList.push(courses[i].name);
    }
    return courseList;
}
console.log(listCourses(courses))

function getAllEnrolledStudents() {
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
    console.log(enrollStudent("Inioluwa", "Aerospace"));
    
}

// function checkEnrollment(enrollment) {
//     return enrollment.map(function ({ studentId }) {
//         return studentId
//     })
// }
// console.log(checkEnrollment(enrollment))