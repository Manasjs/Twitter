import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
      type:String,
      required:true,
      max:[250,'Tweet can not be  more than 250 chracters '] 
    },
    likes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
      }
    ]     
},{timestamps:true});

const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;