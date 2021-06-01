const dataModel= require('../models/dataModel');

const updateData = ((req,res)=>{
    const {name ,gender, } = req.body;
    const slug =req.params.slug ;

    dataModel.find({slug:slug} , (error,data)=>{
        if (error)
        {
            res.send('Ooops error from update' , error);

        }
        else {
            data[0].name=name;
            data[0].gender=gender;
          
            data[0].save();
            dataModel.find({},(error,data)=>{
                res.send(data);
            })

        }
    })
});

module.exports=updateData;