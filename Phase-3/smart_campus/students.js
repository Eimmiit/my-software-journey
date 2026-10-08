let students = [
    {
        id: 1,
        name: "Eimmiit",
        department: "Computer Science",
        level: 400
    },
    {
        id: 2,
        name: "John",
        department: "Cyber Security",
        level: 300
    }
]

export function findStudent(id) {
    let studentById = students.find((student) => {
        return student.id === id;
    });
    return studentById.name
}

export default students;