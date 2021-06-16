const express = require("express");
const router = express.Router();

require("./connection");

const Influencer = require("./schema");

router.post('/register', (req, res) => {
  console.log(req.body);
  console.log("Heeloo");

  const newInfluencer = new Influencer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobNumber: req.body.mobNumber,
    altMobNumber: req.body.altMobNumber,
    youtubeChannel: req.body.youtubeChannel,
    intVideoPrice: req.body.intVideoPrice,
    dediVideoPrice: req.body.dediVideoPrice,
    preRolPrice: req.body.preRolPrice,
    instaChannel: req.body.instaChannel,
    storePrice: req.body.storePrice,
    reelPrice: req.body.reelPrice,
    postPrice: req.body.postPrice,
    referral: req.body.referral,
  });

  newInfluencer.save().then(() => {
      res.status(201).json({ message: "User registered" });
    })
    .catch(() => {
      res.status(500).send("User not registered");
    });
});

module.exports = router;
