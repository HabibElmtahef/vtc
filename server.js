const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()
const port = 9000
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://next:next@cluster0.w7fib.mongodb.net/upm?retryWrites=true&w=majority', {}, err => {
    if(err) console.log(err)
    console.log('Db Connected')
})


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/vehicule', vehiculeRouter)
app.use('/users', require('./Routes/UserRoute'));



app.listen(port, () => {
    console.log('Server Running')
})