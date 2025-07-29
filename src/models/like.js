import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
    onModel: {
        type:String,
        required:true,
        enum: ['Tweet','Comment']
    },
    likeable: {
        type:mongoose.Schema.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user: {
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User'
    }
},{timestamps:true});

const Like = mongoose.model('Like',LikeSchema);
export default Like;