const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const authenticate = require("../Backend/authenticate");
require("./connection");

const { Influencer, Brand } = require("./schema");

// filtered data with status pending
router.get("/register", async (req, res) => {
  try {
    const data = await Influencer.find({ status: "pending" });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// only one user
router.get("/register/:_id", async (req, res) => {
  try {
    const id = req.params._id;
    const data = await Influencer.findById({ _id: id });
    if (!data) {
      return res.status(400).send();
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
// api for search channel
router.get('/register', (req, res)=>{
  const searchdata = req.params.youtubeChannel;
  Influencer.find({youtubeChannel: {$regex: searchdata, $options: '$i'}}).then(data=>{
    res.json(data)
  })
})

  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "images");
    },
    filename: (req, file, callback) => {
      callback(null, req.body.name);
    }
  });
  const upload = multer({ storage: storage });

router.post("/Backend/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


//api for accept
router.put("/register/:_id", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params._id;
    const data = await Influencer.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "accepted" } }
    );
    if (!data) {
      return res.status(400).send();
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
// api for rejection
router.patch("/register/:_id", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params._id;
    const data = await Influencer.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "rejected" } }
    );
    if (!data) {
      return res.status(400).send();
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/register", (req, res) => {
  const {
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
    referral,
    status,
  } = req.body;

  Influencer.findOne({ youtubeChannel:youtubeChannel }).then(
    (userExist) => {
      if (userExist) {
        return res
          .status(400)
          .send({ error: "youtube link already exist", statusCode: 400 });
      }

      const newInfluencer = new Influencer({
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
        referral,
        status,
      });

      newInfluencer
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered" });
        })
        .catch(() => {
          res.status(500).send("User not registered");
        });
    }
  );
});

//=======================apis for brand=================================================


router.get("/brand", async (req, res) => {
  try {
    const data = await Brand.find({ status: "pending" });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//api for accept
router.put("/brand/:_id", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params._id;
    const data = await Brand.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "accepted" } }
    );
    if (!data) {
      return res.status(400).send();
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
// api for rejection
router.patch("/brand/:_id", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params._id;
    const data = await Brand.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "rejected" } }
    );
    if (!data) {
      return res.status(400).send();
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/brand", (req, res) => {
  console.log("YES")
  console.log(req.body)
  const {
    // profilePic,
    firstname,
    lastname,
    email,
    number,
    companyName,
    campaignBudget,
    launchTiming,
    loginId,
    password,
    status,
  } = req.body;

  Brand.findOne({ email: email }).then(
    (userExist) => {
    if (userExist) {
      return res
        .status(400)
        .json({ error: "email already exist", statusCode: 400 });
    }

    const newBrand = new Brand({
      // profilePic,
      firstname,
      lastname,
      email,
      number,
      companyName,
      campaignBudget,
      launchTiming,
      loginId,
      password,
      status,
    });

    newBrand.save().then(() => {
        res.status(201).json({ message: "Brand User registered" });
      })
      .catch(() => {
        res.status(500).send("User not registered");
      });
  });
});

router.post("/signIn", async (req, res) => {
  try {
    let token
    const { logInId, password } = req.body;
    if (!logInId || !password) {
      return res.status(400).json({ error: "Error valid credentials",statusCode:400 });
    }
    const userlogin = await Brand.findOne({ email: logInId });

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);

      token = await userlogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires:new Date(Date.now() + 900000),
        httpOnly:true
      })

      if (!isMatch) {
        res.status(400).json({ error: "Not valid credentials" });
      } else {
        res.json({ message: "logged In" });
      }
    } else {
      res.status(400).json({ error: "Not valid credentials" });
    }
  } catch (err) {
    res.json({ err: "Error" });
  }
});

module.exports = router;
