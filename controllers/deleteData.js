const dataModel= require('../models/dataModel');

const deleteData=((req,res)=>{
    const slug =req.params.slug ;
    dataModel.remove({slug:slug} , (error,data)=>{
        if (error){res.send('ooOOps in delete Error' , error)}
        else {
            dataModel.find({} , (error, data)=>{
                res.send(data);
            })
        }
    })
});


module.exports=deleteData;