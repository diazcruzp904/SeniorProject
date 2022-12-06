import express from 'express'
import {check} from 'express-validator'

import {signUp, login, updateClientInfo} from '../controllers/users-controllers.js'

const router = express.Router()

router.post('/signup',
    [    
        check('userName').not().isEmpty(),
        check('userEmail').normalizeEmail().isEmail(),
        check('userPhone').isLength({min:10, max:10}),//Cant verify Number correctly
        check('password').isLength({min:6}),
    ],
    
signUp)

router.post('/login',
    [
        check('userEmail').normalizeEmail().isEmail(),
        check('password').isLength({min:6}),
    ],
login)

router.patch('/:uid', updateClientInfo)

export default  router