import HttpError from '../models/http-error.js';
import User from '../models/users.js'


const getUsers = async (req, res, next) => {
    let users
    try { 

       users = await User.find({}, '-password')

    } catch (err) {
        const error = new HttpError('Fetching Users Failed', 500)
        return next(error)
    }
    res.json({users: users.map(user => user.toObject({getters: true}))})
}

const getUserById = async (req, res, next) => {

    const userId = req.params.uid

    let user

    try {
        user = await UserSchema.findById(userId)
    } catch (err) {
        const error = new HttpError('Find a User not Working', 500)
        return next(error)
    }

    if (!user) {
        return next(new HttpError('Could not find a User for the provided ID', 404))
    }
    
    res.json({user: user.toObject({getters: true})});

}

const deleteUser = async (req, res, next) => {//Deleting not working correctly
    
    const userId = req.params.uid

    let user
    try {
        user = await User.findById(userId)
    } catch (err) {
        const error = new HttpError('Deleting User not Working', 500)
        return next(error)
    }

    try {
        await user.remove()
    } catch (err) {
        const error = new HttpError('Could not delete user.', 500)
        return next(error)
    }

    res.status(200).json({message: 'Deleted User'})
}

export {
    getUsers,
    getUserById,
    deleteUser
}
