
const fs = require("fs")

const addStudent = (id,name,subject,grade,comment)=>{
    const students = loadStudents()
    const dublStudent = students.filter((student)=>{
        return student.id === id
    })
    console.log(dublStudent);
    if (dublStudent.length == 0){
        students.push({
            id,
            name,
            subject,
            grade,
            comment
        })
        saveStudent(students)
        console.log("Saved Successfully");
    } else {
        console.log("Error Student is Exist")
    }
}
const loadStudents = ()=>{
    try{
        const dataBuffer = fs.readFileSync("students.json").toString()
        return JSON.parse(dataBuffer)
    } catch(e) {
        return[]
    }
} 

const saveStudent = (students)=>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync("students.json",saveData)
}

////////////////////////// Delete
const removeStudent = (id)=>{
    const students = loadStudents()
    const studentsToKeep = students.filter((student)=>{
        return student.id !== id
    })
    saveStudent(studentsToKeep)
    console.log('Removed')
}

////////////////////////// Read
const readStudent = (id)=>{
    const students = loadStudents()
    const studentToRead = students.find((student)=>{
        return student.id === id
    })
    if (studentToRead){
    console.log(studentToRead.id)
    console.log(studentToRead)
    }
    else {
        console.log("No Students with this ID")
    }
}

////////////////////////// List
const listStudents = ()=>{
    const students = loadStudents()
    students.forEach(student => {
        console.log(student.name)
    });
    // console.log(students)
    }

///////////////// Export Functions 

module.exports={
    addStudent,
    removeStudent,
    readStudent,
    listStudents
}