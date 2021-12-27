const express = require('express')
const mydata = require('../model/datamodel')
const router = express.Router();


router.post('/getnewdata',async(req,res)=>{
    
    try{
     const {end_year,intensity, sector,topic,insight, url, region,start_year,added,published,country, relevance, pestle,source, title,likelihood} = req.body;
     if(!intensity || !relevance ||  !likelihood || !title ){
        return res.status(400).json({msg:"please fill the all field",statuscode:400});
     }
     const newdata = new mydata({
          end_year,intensity, sector,topic,insight, url, region,start_year,added,published,country,
           relevance, pestle,source, title,likelihood
       });
       await newdata.save()
            res.json({msg:"Your Data Added!"})
    }catch(err){
     return res.status(500).json({msg:err.message})
    }
});

router.get('/getalldata',async(req,res)=>{
    try{
        const data = await mydata.find();
        // const user = await Users.find()
          res.json(data)
    }catch(err){
        return res.status(500).json({msg:err.message})
    }
})





module.exports = router;