const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 6000
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 
app.use(cors());

const DB = process.env.DATABASE_DB;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true } ).then(()=>{
    console.log("connection sucessfully");
}).catch((err)=> console.log("connection faild"))

app.use("/api",require('./Routes/route'))
app.use(express.urlencoded({extended:false}));



if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    
}


app.listen(PORT,()=>{
    console.log("Running server on PORT ",PORT );
})
    