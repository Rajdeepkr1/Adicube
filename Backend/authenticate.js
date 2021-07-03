const jwt = require("jsonwebtoken");
// const {Influencer, Brand} = require("../Backend/schema");

const authenticate = async (req, res, next)=>{
    try{
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, process.env.SECRET);
        const rootUser = await User.findOne({_id:verifytoken._id,"tokens:token":token});

        if(!rootUser){
            throw new Error("Not found")
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    }
    catch(err){
        res.status(400).send("Not authenticate")
        console.log(err);
    }
} 

module.exports = authenticate;