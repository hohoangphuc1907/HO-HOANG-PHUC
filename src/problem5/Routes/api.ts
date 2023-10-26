//importing modules
import express from "express";
import { StudentController } from "../model/student.controller";


//initiating the router
export const router = express.Router()


router.get('/:name', StudentController.findByName)


router.post('/',StudentController.addStudent)


router.get('/', StudentController.getStudents)


router.get('/:id', StudentController.getAStudent)


router.put('/:id', StudentController.updateStudent)


router.delete('/:id', StudentController.deleteStudent)