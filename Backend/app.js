const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.Port;
const app = express();


dotenv.config({path:'/config.env'})
// const PORT = process.env.PORT

require('./connection') // conection to router

app.use(express.json()) // to understand the data to be in json

const Influencer = require("./schema");
// const Brand = require('./schema'); //link to schema

app.use(require('./infulencerAccess')) //link to router file

if(process.env.NODE_ENV =="production"){
    app.use(express.static("client/build"));
}

app.listen(PORT, ()=>{
    console.log(`successfull listening at ${PORT}`)
})