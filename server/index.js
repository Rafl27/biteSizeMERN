import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express()

//localhost:5000/posts
app.use('/posts', postRoutes)

//this limits the file size of the images
app.use(bodyParser.json({ limit: "30mb", extende: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extende: true }))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://bitesize:bitesize123@cluster0.ztwp6.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        app.listen(PORT, () => {
            console.log(`The server has sucessfully been connected to the dataBase and is running on port ${PORT}`)
        })
    }
).catch((error) => console.log(error.message))

//mongoose.set('useFindAndModify', false)
