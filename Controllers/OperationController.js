const Workout = require('../models/OperationSchema');
const mongoose = require('mongoose');

// get all operations
    const getOperations = async (req, res) => {
        const operations = await Operation.find({}).sort({createdAt: -1})
        
        res.status(200).json(operations)
    }

// get a single operation
    const getOperation = async (req, res) => {
        const {id} = req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'no such operation'})
        }
        const operation = await Operation.findById(id) 

        if(!operation){
            return res.status(404).json({error: 'Not Found operation'})
        }

        res.status(200).json(operation)
    }

//create a new operation
const createOperation =async (req,res) => {
    const {OperationId,Prix,status} = req.body

    let emptyFields = [] 

    // cheking which feild is empty when we send the post request and we can send that info back to the client

    if(!OperationId){
        emptyFields.push('OperationId')
    }
    if(!Prix){
        emptyFields.push('Prix')
    }
    if(!status){
        emptyFields.push('status')
    }

    //checking which fields are missing
    if(emptyFields.length > 0){
        return res.status(404).json({error: 'please fill in all the fields',emptyFields})
    }

    // add doc to db
    try{
        const operation = await Operation.create({OperationId,Prix,status})
        res.status(200).json(operation)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete an operation
const deleteOperation = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such operation'})
    }

    const operation = await Operation.findOneAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error: 'there is no operation'})
    }
    res.status(200).json(operation)
}

//update an operation
    const updateOperation = async (req, res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such user'})
    }

    const operation = await Operation.findByIdAndUpdate({_id:id}, {
       ...req.body
    })
    
    if(!operation){
        return res.status(404).json({error: 'there is no operation'})
    }
    res.status(200).json(operation)

    }
 
module.exports = {
    getOperations,
    getOperation,
    createOperation,
    deleteOperation,
    updateOperation
}
