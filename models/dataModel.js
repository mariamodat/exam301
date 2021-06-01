const mongoose= require('mongoose');
const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true ,
        lowercase:true , 
        trim:true ,

    },
    slug:{
        type:String,
        unique:true ,
        lowercase:true , 
        trim:true ,
    },
    gender:String , 

    img:String,
    psiPowers:[String],


});

const dataModel=mongoose.model('myData' , dataSchema);
module.exports=dataModel;