const mongoose = require('require');

const Schema = mongoose.Schema

const DriverSchema = new Schema({
    DriverId: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,

    },
    driverlicense: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    }
},{timestamps: true })

module.exports = mongoose.model('Driver',DriverSchema)

 