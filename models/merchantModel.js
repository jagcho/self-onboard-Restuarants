import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
    restaurantName:{
        type:String,
        required:true,
        trim:true
    },
    contactName:{
        type:String,
        required:true,
        trim:true
    },
    Pincode:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    website:{
        type:String,
    },
    Phone:{
        type:String,
        required:true
    },
    averageDailyTransactions:{
        type:String,
    }

},{timestamps:true})

export default mongoose.model('merchants',merchantSchema)