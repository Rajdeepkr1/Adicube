const express = require("express");
const channelrouter = express.Router();
const multer = require("multer");
const authenticate = require("../Backend/authenticate");
require("./connection");

const { Influencer, Brand } = require("./schema");

router.get("/register", async (req, res) => {
    try {
      const data = await Influencer.find({});
      res.send(data);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  });


module.exports = channelrouter;