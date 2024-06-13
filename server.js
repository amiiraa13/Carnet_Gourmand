const express = require("express") 
const mongoose = require("mongoose") 
const cors =require("cors")
require('dotenv').config()

const receRouter= require("./routes/receRouter") // nous importons notre router ici
const ingreRouter= require("./routes/ingreRouter") 
const port = process.env.PORT || 3000 
const db = "mongodb://0.0.0.0:27017/Cuisine" 
const app = express() 
 
app.use(cors()) 
app.use(express.json()) //nous demandons ici a express d'analyser nos requetes en json
app.use(receRouter)//nous demandons ici a express d'utiliser notre receRouter, les routes definies dans notre router seront donc disponibles
app.use(ingreRouter)


app.listen(port,(err)=>{
    if(err){
        console.log(err) ;
    }else{
        // console.log(`connecté au serveur sur le port ${port}`) ;
        console.log("Bonjour Monde") 
    }
})


mongoose.set('strictQuery',true);

mongoose.connect(db)