//importing modules
import  {Schema, model,} from 'mongoose'
import Joi from 'joi'


//creating an interface 
interface IStudents {
    name: string,
    age: string,
    score: number,

}

//Postschema
const studentSchema = new Schema<IStudents>({
    name: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: false
    },
    
})

//creating a model
 export const Student = model<IStudents>('Student', studentSchema )