const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const multer = require("multer")
require("./connection");

const Influencer = require("./schema");

const storage = multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"images")
  },
  filename:(req,file,callback)=>{
    callback(null,req.body.name);
  }
})


const upload = multer({ storage: storage });
router.post("/Backend/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

router.get("/register", (req, res) => {
  Influencer.find({}).then(eachOne =>{
    res.json(eachOne)
  })
});

router.delete("/register", (req, res)=>{
  Influencer.findOne({})
})

router.post('/register', (req, res) => {

  const{
    profilePic,
    firstname,
    lastname,
    email,
    Language,
    Categories,
    mobNumber,
    altMobNumber,
    youtubeChannel,
    intVideoPrice,
    dediVideoPrice,
    preRolPrice,
    instaChannel,
    storePrice,
    reelPrice,
    postPrice,
    referral
  } = req.body;

  Influencer.findOne({youtubeChannel:req.body.youtubeChannel})
  .then((userExist)=>{
    if(userExist){
      return res.status(400).send({error:"youtube link already exist",statusCode: 400})
    }

    const newInfluencer = new Influencer({
      profilePic,
      firstname,
      lastname,
      email,
      Language ,
      Categories,
      mobNumber,
      altMobNumber,
      youtubeChannel,
      intVideoPrice,
      dediVideoPrice,
      preRolPrice,
      instaChannel,
      storePrice,
      reelPrice,
      postPrice,
      referral
    });

  newInfluencer.save().then(() => {
      res.status(201).json({ message: "User registered" });
    })
    .catch(() => {
      res.status(500).send("User not registered");
    });
  });
});

const Brand = require("./schema");

router.get("/brand", (req, res) => {
  res.send("Hello from route");
});

router.post("/brand", (req, res) => {
  const {
    profilePic,
    firstname,
    lastname,
    email,
    mobNumber,
    companyName,
    campaignBudget,
    launchTiming,
    loginId,
    password,
  } = req.body;

  Brand.findOne({ Email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(400).json({ error: "email already exist" });
      }

      const newBrand = new Brand({
        profilePic,
        firstname,
        lastname,
        email,
        mobNumber,
        companyName,
        campaignBudget,
        launchTiming,
        loginId,
        password,
      });

      newBrand.save().then(() => {
          res.status(201).json({message: "User registered"});
        })
        .catch(() => {
          res.status(500).send("User not registered");
        });
    });
});


router.post('/signIn', async (req, res)=>{

    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"Invalid Data"})
        }
        const userlogin = await Brand.findOne({Email:email});

        if(userlogin){
            const isMatch = await bcrypt.compare(password, userlogin.password)
        if(!isMatch){
            res.status(400).json({error:"Not valid credentials"})
        }
        else{
            res.json({message:"logged In"})
        }
    }else{
        res.status(400).json({error:"Not valid credentials"})
    }
    }
    catch(err){
        console.log(err);
    }
})


module.exports = router;