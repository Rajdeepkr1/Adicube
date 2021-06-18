const express = require("express");
const router = express.Router();

require("./connection");

const Influencer = require("./schema");

router.get("/register", (req, res) => {
  Influencer.find({}).then(eachOne =>{
    res.json(eachOne)
  })
});

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

module.exports = router;