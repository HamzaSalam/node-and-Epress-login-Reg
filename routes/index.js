var express = require('express');
const { MongoServerError } = require('mongodb');  
var router = express.Router();
const userModel = require("./users")
const postModel = require("./posts")


router.get('/', function(req, res) {
  res.render('index',{title:"express"});
});

router.get('/createuserss', async function(req, res,next) {
  
    let createuser = await userModel.create({
      username: "hamza",
      password: "qwerty",
      posts: [],
      email: "ayesha101@.com",
      fullname: "hamza salam",
    });
    res.send(createuser);
});

router.get('/alluserposts', async function(req, res,next) {
  
  let user = await userModel.findOne({_id:"65b501df0161f93a3fa6b7de"}).populate('posts');
  res.send(user)
});

router.get('/createposts', async function(req, res,next) {
  
  let createposts = await postModel.create({
    postText: "hellow kes ho sary k sary",
    user: "65b501df0161f93a3fa6b7de",
      });
  let user = await userModel.findOne({_id: "65b501df0161f93a3fa6b7de"});
  user.posts.push(createposts._id);
  await user.save();
  res.send("done")
});

module.exports = router;
