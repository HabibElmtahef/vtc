const mongoose = require('require');

const Schema = mongoose.Schema

const OperationSchema = new Schema({
    OperationId: {
        type: Number,
        required: true
    },
    Prix: {
        type: String,
        required: true

    },
    status: {
        type: Boolean
    }
},{timestamps: true })

module.exports = mongoose.model('Operation',OperationSchema)

 