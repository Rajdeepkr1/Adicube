const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const influencerSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required : true
    },
    lastname: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true
    },
    Language : String,
    Categories: String,
    mobNumber: {
        type : Number,
        min : 10,
        required : true
    },
    altMobNumber:{
        type : Number,
        min : 10
    },
    youtubeChannel : {
        type:String,
        required : true
    },
    intVideoPrice : {
        type : Number,
        required : true
    },
    dediVideoPrice:{
        type : Number,
        required : true
    },
    preRolPrice:{
        type : Number,
        required : true
    },
    instaChannel: String,
    storePrice: Number, 
    reelPrice: Number,
    postPrice: Number,
    referral:String,
    status : String
})

const Influencer = mongoose.model('influencer', influencerSchema)


const brandSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required : true
    },
    lastname: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true
    },
    number: {
        type : Number,
        min : 10,
        required : true
    },
    companyName: {
        type:String,
        required : true
    },
    campaignBudget: {
        type : Number,
        required : true
    }, 
    launchTiming: String,
    loginId: {
        type:String,
        required : true,
        unique: true
    },
    password: {
        type:String,
        required : true
    },
    status : String,
    tokens : [
        {
            token : {
                type:String,
                required : true
            }
        }
    ]
})

brandSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

brandSchema.methods.generateAuthToken = async function (){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }
    catch(e){
        console.log(e)
    }
}

const Brand = mongoose.model('Brand', brandSchema)

module.exports = {Influencer, Brand}