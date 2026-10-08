let courses = [
    {
        id: 101,
        name: "JavaScript",
        units: 3
    },
    {
        id: 102,
        name: "Database Systems",
        units: 3
    }
]

export function findCourse(id){
    let courseById = courses.find((course) => {
        return course.id === id;
    })
    return courseById.name

}

export default courses;