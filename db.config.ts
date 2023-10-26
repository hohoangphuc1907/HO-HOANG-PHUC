//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

  //details from the env

const dbName = 'School'

//connection string to mongo atlas

const connectionString = `mongodb+srv://phuc:123@cluster0.1xa0l.mongodb.net/School?retryWrites=true&w=majority`

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

//db connection
export const db = mongoose.connect(connectionString, options)
.then(res => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch(err => {
    console.log(err)
})