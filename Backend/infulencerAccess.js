const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
require("./connection");

const Influencer = require("./schema");

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
    firstname,
    lastname,
    email,
    number,
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

      const data = new Brand({
        firstname,
        lastname,
        email,
        number,
        companyName,
        campaignBudget,
        launchTiming,
        loginId,
        password,
      });

      data.save().then(() => {
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