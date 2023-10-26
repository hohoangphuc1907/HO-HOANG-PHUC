//import modules
import { Request, Response } from 'express'
import { studentServices } from './student.service'

class studentController {
    findByName = async (req: Request, res: Response) => {
        const name = req.params.name
        const student = await studentServices.findByName(name)
        res.send(student)
    }
    addStudent = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            name: req.body.name,
            age: req.body.age,
            score: req.body.score
        }
        const newStudent = await studentServices.createStudent(data)
        res.status(201).send(newStudent)       
        
    }


    getStudents = async (req: Request, res: Response) => {
        const student = await studentServices.getStudents()
        res.send(student)
    }


    getAStudent = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const oneStudent = await studentServices.getStudent(id)
        res.send(oneStudent)
    }

    updateStudent = async (req: Request, res: Response) => {
        const id = req.params.id
       const updateStudent = await studentServices.updateStudent(id, req.body)  
        res.send(updateStudent)
    }


    deleteStudent = async (req: Request, res: Response) => {
        const id = req.params.id
        await studentServices.deleteStudent(id)
        res.send('student deleted')
    }

}

//export class
export const StudentController = new studentController()