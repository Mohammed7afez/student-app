const yargs = require ("yargs")
const students = require("./note")

yargs.command({
    command:"add",
    describe:"Add Student",
    builder:{
        id:{
            describe:"This is student ID",
            demandOption: true,
            type:'string'
        },
        name:{
            describe:"This is student name",
            demandOption: true,
            type:'string'
        }, 
        subject:{
            describe:"This is subject",
            demandOption: true,
            type:'string'
        }, 
        grade:{
            describe:"This is grade",
            demandOption: true,
            type:'number'
        },
        comment:{
            describe:"This is comment",
            demandOption: false,
            type:'string'
        }
    },
    handler:(argv)=>{
        students.addStudent(argv.id,argv.name,argv.subject,argv.grade,argv.comment)
    }
})

yargs.command({
    command:"read",
    describe:"Read Student info",
    builder:{
        id:{
            describe:"This is student ID",
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=>{
        students.readStudent(argv.id)
    }
})

yargs.command({
    command:"delete",
    describe:"Delete this student",
    builder:{
        id:{
            describe:"This is student id",
            demandOption: true ,
            type: "string"
        }
    },
    handler:(argv)=>{
        students.removeStudent(argv.id)
    }
})

yargs.command({
    command:"list",
    describe:"list all students",
    handler:(argv)=>{
        students.listStudents()
    }
})
// console.log(yargs.argv)
yargs.parse()

// node app.js add --id="003" --name="Mostafa" --subject="Maths" --grade=85 --comment="Successed"