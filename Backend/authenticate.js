const jwt = require("jsonwebtoken");
const Influencer = require("../Backend/schema");

const authenticate = async (req, res, next)=>{
    try{
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, )

    }
    catch(err){
        res.status(400).send("Not authenticate")
        console.log(err);
    }
} 

module.exports = authenticate;