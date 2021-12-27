const mongoose = require("mongoose");
const schema = mongoose.Schema;


const dataschema = new mongoose.Schema({
   id:{
    type:Number, auto: true,default : function() {
        return Math.floor(Math.random()*900000000300000000000) + 1000000000000000
      }
   },
    end_year:{
        type:Number,
        maxlength:4
    },
    intensity:{
        type:Number,
        maxlength:3
    },
    sector:{
        type:String
    },
    topic:{
        type:String
    },
    insight:{
        type:String
    },
    url:{
        type:String
    },
    region:{
        type:String
    },
    start_year:{
        type:Number,
        maxlength:4
    },
    impact:{
        type:Number,
        maxlength:2
    },
    added:{
        type:String
    },
    published:{
        type:Date
    },
    country:{
        type:String
    },
    relevance:{
        type:Number,
        maxlength:2
    },
    pestle:{
        type:String
    },
    source:{
        type:String
    },
    title:{
        type:String
    },
    likelihood:{
        type:Number,
        maxlength:2
    }
  

});

module.exports = mongoose.model("mydata",dataschema)