const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
    }, 
    role: {
        type: String,
        default: 'USER'
    },
    avatar: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: null
    },
    status:{
        type: Boolean,
        default: true
    }
},{timestamps: true })

module.exports = mongoose.model('User',UserSchema)

