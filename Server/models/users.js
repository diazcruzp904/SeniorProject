import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const {Schema, model} = mongoose

const userSchema = new Schema({

    role: {type: String, required: true},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true, unique: true },
    userPhone: {type: Number, required: true},
    password: {type: String, required: true, minlength: 6},

})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

export default User