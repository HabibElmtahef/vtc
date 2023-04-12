const mongoose = require('require');

const Schema = mongoose.Schema

const VehiculeSchema = new Schema({
    VehiculeId: {
        type: Number,
        required: true
    },
    VehiculeType: {
        type: String,
        required: true

    },
    VehiculeImg: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    }
},{timestamps: true })

module.exports = mongoose.model('Vehicule',VehiculeSchema)

 