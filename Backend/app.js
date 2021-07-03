const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

require('./connection') ;// conection to router

app.use(express.json()) // to understand the data to be in json
app.use(cors());

const {Influencer, Brand} = require("./schema");// link to schema




app.use(require('./infulencerAccess')); //link to router file

// if(process.env.NODE_ENV =="production"){
//     app.use(express.static("client/build"));
// }

app.listen(PORT, ()=>{
    console.log(`successfull listening at ${PORT}`);
})













// app.get("/register", async (req, res, next) => {
//     try {
//     //   const data = await Influencer.find({ status: "pending" });
//       const data = await Influencer.find({ });
//       res.send(data);
//     } catch (err) {
//       console.log(err);
//       res.status(400).send(err);
//     }
//   });

//   app.get("/register/:lastname", async (req, res, next) => {
//     try {
//       const id = req.params.lastname;
//       const data = await Influencer.find({lastname:id});
//       if(data){
//         res.send(data);
//       }
//       else{
//         console.log("Fdf")
//         next();
//       }
  
//     } catch (err) {
//       console.log(err);
//       res.send(err);
//     }
//   });
//   // api for search channel
//   app.get('/register/:youtubeChannel', async (req, res)=>{
//     try {
//       console.log("He")
//       const id = req.params.youtubeChannel;
//       const data = await Influencer.find({youtubeChannel:id});
//       if (!data) {
//         return res.status(400).send();
//       } else {
//         res.send(data);
//       }
//     } catch (err) {
//       console.log(err);
//       res.send(err);
//     }
//   })