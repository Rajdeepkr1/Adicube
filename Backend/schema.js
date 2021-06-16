const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const influencerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    Language : String,
    Categories: String,
    mobNumber: Number,
    altMobNumber:Number,
    youtubeChannel : String,
    intVideoPrice : Number,
    dediVideoPrice:Number,
    preRolPrice:Number,
    instaChannel: String,
    storePrice: Number, 
    reelPrice: Number,
    postPrice: Number,
    referral:String,
})

// influencerSchema.methods.addMessage = async function(youtubeChannel){
//     try{
//         this.youtubeChannel = this.youtubeChannel.concat({youtubeChannel})
//         await this.save();
//         return this.youtubeChannel;
//     }
//     catch(err){
//         console.log("err")
//     }
// }



const Influencer = mongoose.model('influencer', influencerSchema)


// const brandSchema = new mongoose.Schema({
//     Firstname: String,
//     Lastname: String,
//     Email: String,
//     Number: Number,
//     CompanyName: String,
//     CampaignBudget: Number, 
//     LaunchTiming: String,
//     LoginId: String,
//     password: String
// })

// brandSchema.pre('save', async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
//     console.log("hehehe")
// })


// const Brand = mongoose.model('Brand', brandSchema)

module.exports = Influencer;