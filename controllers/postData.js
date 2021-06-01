const dataModel= require('../models/dataModel');

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
            dataModel.save();
            res.send('item has been added!')
        }
    })
})

module.exports= createData;