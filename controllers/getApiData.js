const superagent = require ('superagent');


const getApiData= ((req,res)=>{
    const url= 'https://psychonauts-api.herokuapp.com/api/characters?limit=10';
    superagent.get (url).then(data =>{
        const arrOfObj = data.body.map(item=> new ClassOfObj(item));
        res.send(arrOfObj);
    }).catch(error=>{
        console.log('==========================');
        console.log(error);
        console.log('==========================');
    })

});

class ClassOfObj{
    constructor(data)
    {
        this.name=data.name;
        this.gender=data.gender;
        this.img=data.img;
        this.psiPowers=data.psiPowers;
    }
}

module.exports=getApiData;