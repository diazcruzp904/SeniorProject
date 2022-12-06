import express from 'express'
import {check} from 'express-validator'

import {getUsers, deleteUser, getUserById } from '../controllers/admin-contoller.js'

const adminRouter = express.Router()

adminRouter.get('/allusers', getUsers);

adminRouter.get('/:uid', getUserById)

adminRouter.delete('/:uid', deleteUser)

export default  adminRouter