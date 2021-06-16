const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

require("./connection");

const Brand = require("./schema");

// router.get("/", (req, res) => {
//   res.send("Hello from route");
// });

router.post("/", (req, res) => {
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

//   console.log(req.body);
//   res.json({ message: req.body });

  Brand.findOne({ Email: Email })
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
