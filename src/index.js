import express from 'express';
import {connect} from './config/database.js';

import TweetService from './services/tweet-service.js';
const app=express();

app.listen(3000,async()=>{
    console.log("server started")
    await connect ();
    console.log("mongo db connected");
    const ser = new TweetService();
    const tweet= await ser.create({content:'Watching #movies is #awasome'});
    console.log(tweet);
      
});
