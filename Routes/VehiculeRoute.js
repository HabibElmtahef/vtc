import express from 'express'
import Vehicule from '../Models/Vehicule.js';


const vehiculeRouter = express.Router();

// get all rating
vehiculeRouter.get('/all', async(req, res) => {
    try {
        const docs = await Vehicule.find()
        res.json(docs)
    } catch (err) {
        
    }
});
vehiculeRouter.post('/add', async (req, res) => {
    try {
        const { type, image } = req.body
        const nvDoc = new Vehicule({type, image})
        await nvDoc.save()
        res.json({msg: "Done"}) 
    } catch (error) {
        res.json({err: error.message})
    }
})

vehiculeRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
    } catch (err) {
        
    }
})

export default vehiculeRouter;