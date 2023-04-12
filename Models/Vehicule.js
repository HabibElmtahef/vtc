//Create table for rating
import mongoose from 'mongoose'

const VehiculeSchema = new mongoose.Schema({
    type: {type: String, required: true},
    image: {type: String, required: true},
    status: {type: Boolean, default: false}
},{
    timestamps: true //for date
});

const Rating = mongoose.model('Vehicule', VehiculeSchema);
export default Rating;