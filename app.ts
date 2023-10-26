
import express from 'express'
import { db } from './db.config'
import { router } from './src/problem5/Routes/api'

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/api/student', router)

//db connection then server connection
db.then(() => {
    app.listen(7070, () => console.log('Server is listening on port 7070'))
})
