const dataModel= require('../models/dataModel');

const getStoredData=((req,res)=>{
    dataModel.find({},(error,data)=>{
        res.send(data);

    });
});

module.exports=getStoredData;