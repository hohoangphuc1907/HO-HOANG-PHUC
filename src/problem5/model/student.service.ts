

//import module
import { Student } from "./student"
export class studentService {

    async createStudent(data: any) {
        try {
            const newStudent = await Student.create(data)
            return newStudent

        } catch (error) {
            console.log(error)
        }
    }

 
    async getStudents() {
        try {
            const students = await Student.find()
            return students

        } catch (error) {
            console.log(error)
        }
    }

 
    async findByName(name: string) {
        try {
            const students = await Student.findOne({name: name})
            return students

        } catch (error) {
            console.log(error)
        }
    }

 
    async getStudent(id: string) {
      
        try {
            const student = await Student.findById({_id:id})
            if (!student) {
                return 'student not available'
            }
            return student

        } catch (error) {
            console.log(error)
        }
    }

    async updateStudent(id: string, data: any) {
        try {
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const updateStudent = await Student.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!updateStudent){
                    return "updateStudent not available"
                }
                return updateStudent          
        } catch (error) {
            console.log(error)
        }
    }

    async deleteStudent(id: string) {
        try {
            const deleteStudent = await Student.findByIdAndDelete(id)
            if (!deleteStudent) {
                return 'delete Student not available'
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//export the class
export const studentServices = new studentService()