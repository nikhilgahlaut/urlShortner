import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
},{timestamps:true});

export default mongoose.model("Url",urlSchema);