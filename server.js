const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const superagent = require('superagent');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;
const dataModel= require('./models/dataModel');
const deleteData = require('./controllers/deleteData')

mongoose.connect('mongodb://127.0.0.1:27017/myDB', {useNewUrlParser: true,useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

const getApiData= require('./controllers/getApiData');
// const createData= require('./controllers/createData');
const getStoredData= require('./controllers/getStoredData')
const updateData = require('./controllers/putData')


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});

app.get('/data1' , getApiData);

app.delete('/data/:slug' , deleteData);

app.put('/data/:slug' , updateData)

//////////////////////////////////////////////////////////////

// the function for Creating Data inside my Data base :

const createData= ((req,res)=>{
    const {name ,gender,img,psiPowers } = req.body;
    const slug = name.toLowerCase().split(' ').join('-');
    dataModel.find({slug:slug} , (error,data)=>{
        if (data.length>0 )
        {
            res.send('Already Exists ');
        }
        else {
            const newDataModel = new dataModel({
                name:name , 
                gender:gender,
                img:img,
                psiPowers:psiPowers,
                slug:slug,
            });
            newDataModel.save();
            res.send('item has been added!')
        }
    })
})
app.post('/data' , createData);
 

/////////////////////////////////////////////////////////

app.get('/data', getStoredData)
////////////////////////////////////////////////////




app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});