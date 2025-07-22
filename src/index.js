const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app=express();

app.listen(3000,async()=>{
    console.log("server started")
    await connect ();
    console.log("mongo db connected");
   // const tweet =await Tweet.create({
       // content:'sixth tweet',
       // userEmail:'x@y.com'
    
   // });

//    const tweet = await Tweet.findById('687e8156ff629012beebe52f');
//    tweet.userEmail = 'm@n.com';
//    await tweet.save();

     const TweetRepo = new TweetRepository;
     //const tweet = await TweetRepo.get('687e625d216ae10e7755c1d4');
     //const tweet = await TweetRepo.update('687e828959b1b64c930a323e',{content:"this is me"});
    //  const  tweet = await TweetRepo.create({content:'my tweet'});
    //  console.log(tweet)
    //  tweet.comments.push({content:'first comment'});
    //  await tweet.save();
    //  console.log(tweet);

    // const tweet = await TweetRepo.create({content:"this is my second tweet"});
    // console.log(tweet);
    // const comment = await Comment.create({content:"this is my review"});
    // tweet.comments.push(comment);
    //await tweet.save();
       const tweet = await TweetRepo.getwithComments('687fbaa282d4a5552fd6dc86');

    console.log(tweet);
});
