import express  from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import usersRouter from '../Server/routes/users-route.js'
import adminRouter from './routes/admin-route.js'
import HttpError from './models/http-error.js'


const app = express()

app.use(bodyParser.json())

app.use('/api/users', usersRouter)

app.use('/api/admin', adminRouter)

app.use((req, res, next) => {
    return next(new HttpError('Could not find this Route', 404))
})


app.use((error, req, res, next) => {
    if (res.headerSent){
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message:error.message || 'An unknown error orccured!'})

})

await mongoose
.connect('mongodb+srv://Admin:Fullstack@fullstack.4mwirig.mongodb.net/users?retryWrites=true&w=majority')
.then(() => {
    app.listen(5000, () => console.log("connected"))
})
.catch(err => {
    console.log(err)
})