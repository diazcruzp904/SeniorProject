import { validationResult } from 'express-validator';

import HttpError from '../models/http-error.js';
import User from '../models/users.js'

const signUp = async (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return next(new HttpError('Invalid User input, Please check your Name, Email, PhoneNumber, or Password', 422))
    }

    const { role, userName, userEmail,  userPhone, password} = req.body

    console.log(req.body)

    let existingUser
    try {
        existingUser  = await User.findOne({userEmail: userEmail})

    } catch (err) {
        const error = new HttpError('SignUp not working', 500)
        return next(error)
    }

    if (existingUser) {
        const error = new HttpError('User already exist', 422)
        return next(error)
    }

    const createdNewUser = new User({
        role,
        userName,
        userEmail,
        userPhone,
        password,
    })

    try {
        await createdNewUser.save()

    } catch (err) {
        const error = new HttpError('Sign up Failed', 500)
        return next(error)
    }
    
    res.status(201).json({user: createdNewUser.toObject({getters: true})})

}

const login = async (req, res, next) => {
    const {userEmail, password} = req.body

    let existingUser
    try {
        existingUser  = await User.findOne({userEmail: userEmail})

    } catch (err) {
        const error = new HttpError('Logging in not Working', 500)
        return next(error)
    }

    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError('Invalid Credentials, could not log in', 401)
        return next(error)
    }
    
    res.json({message: 'Logged in'})
 
}

const updateClientInfo = async (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return next(new HttpError('Invalid User input, Please check your Email, or PhoneNumber ', 422))
    }

    let existingUser
    try {
        existingUser  = await User.findOne({userEmail: userEmail})

    } catch (err) {
        const error = new HttpError('Update failed', 500)
        return next(error)
    }

    if (existingUser) {
        const error = new HttpError('Email already exist', 500)
        return next(error)
    }

    const { userEmail, userPhone} = req.body

    const userId = req.params.uid

    let user

    try {
        user = await User.findById(userId)
    } catch (err) {
        const error = new HttpError('Could not Find a User', 500)
        return next(error)
    }

    if (!user) {
        return next(new HttpError('Could not find a User for the provided ID', 404))
    }

    user.userEmail = userEmail;
    user.userPhone = userPhone;

    try {
        await user.save()
    } catch (err) {
        return next(new HttpError('Could not update user', 500))
    }

    res.status(200).json({message: 'This is not working correctly, not updating user', user: user.toObject({getters: true})})

}

export {
    signUp,
    login,
    updateClientInfo,
}
