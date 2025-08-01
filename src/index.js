import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';

import apiRoutes from './routes/index.js';
import {TweetRepository, UserRepository} from  './repository/index.js';
import LikeService from './services/like-service.js';


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(3000,async()=>{
    console.log("server started")
    await connect ();
    console.log("mongo db connected");

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);

    
    // let user = await userRepo.create({
    //    email:'newuser@example.com',
    //    password:'123456',
    //    name:'new user'
    // });
    
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0],'Tweet',user.id);

    
});
