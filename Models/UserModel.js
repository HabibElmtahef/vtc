import { model } from 'mongoose'

const UserModel = new model({
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
    telephone:  {
        type: String
    },
    role: {
        type: String
    },
    avatar: {
        type: String
    },
})