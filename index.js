const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const CollegeModel = require('./models/collegemodel'); //importing the schema

app.use(cors());//server side in the frontend
app.use(express.json());//to send data in json format
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }); 

app.post("/CreateCollege",(req,res) =>{
    CollegeModel.create(req.body)
    .then(colleges => res.json(colleges))
    .catch(err => res.json(err))
})
app.get('/',(req,res) =>{
    CollegeModel.find({})
    .then(colleges => res.json(colleges))
    .catch(err => res.json(err))

})

app.get('/getuser/:id',(req,res) =>{
    CollegeModel.findById(req.params.id)
    .then(colleges => res.json(colleges))
    .catch(err => res.json(err))

})
app.put('/UpdateCollege/:id',(req,res) =>{
    const id = req.params.id;
    CollegeModel.findByIdAndUpdate({_id: id},req.body,{useFindAndModify:false})
    .then(colleges => res.json(colleges))
    .catch(err => res.json(err))
})

app.delete('/deleteCollege/:id',(req,res) =>{
    const id = req.params.id;
    CollegeModel.findByIdAndDelete({_id: id})
    .then(colleges => res.json(colleges))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})

// dznNGH8qS6kP6nAr