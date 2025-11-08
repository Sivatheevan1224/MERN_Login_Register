const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const EmployeeModel = require('./models/Employee');

mongoose.connect('mongodb://localhost:27017/Employee');

app.post('/register', async (req, res)=>{
    EmployeeModel.create(req.body)
    .then((employee)=>{
        res.status(201).json({message: 'Employee registered successfully', employee});
    })
    .catch((error)=>{
        res.status(500).json({error: 'Internal server error'});
    });
});
app.post('/login', async (req, res)=>{
    EmployeeModel.findOne({email: req.body.email, password: req.body.password})
    .then((employee)=>{
        if(employee){
            res.status(200).json({message: 'Login successful', employee});
        } else {
            res.status(401).json({error: 'Invalid email or password'});
        }
    })
    .catch((error)=>{
        res.status(500).json({error: 'Internal server error'});
    });
});

app.listen(PORT, (err)=>{
    if(err) console.error(err) ;
    console.log(`Server is running on port ${PORT}`);
})
