const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Token = require('../models/Token')

/* GET posts */
router.get('/', async (req, res, next) => {
  const posts = await Post.find().sort({ createdAt: 'desc' });
  return res.status(200).json({
    statusCode: 200,
    message: 'Fetched all posts',
    data: { posts },
  });
});

router.get('/token', async (req, res, next) => {
  const token = await Token.find().sort({ token: 'desc' });
  return res.status(200).json({
    statusCode: 200,
    message: 'Fetched all posts',
    data: { token },
  });
});

/* GET post */
router.get('/:id', async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  return res.status(200).json({
    statusCode: 200,
    message: 'Fetched post',
    data: {
      post: post || {},
    },
  });
});

/* POST post */
router.post('/', async (req, res, next) => {
  const { title, author, content, tags } = req.body;
  const post = new Post({
    title,
    author,
    content,
    tags,
  });
  await post.save();
  return res.status(201).json({
    statusCode: 201,
    message: 'Created post',
    data: { post },
  });
});

router.post('/token', async (req, res, next) => {
  const request = req.body.token;
  const tokenArray  = JSON.parse(request);
  tokenArray.forEach(async (token) =>{
  const post = new Token({
    token,
  });
  await post.save();
});
  return res.status(201).json({
    statusCode: 201,
    message: 'Created post',
    data: { request },
  });
  
});

/* PUT post */
router.put('/:id', async (req, res, next) => {
  const { title, author, content, tags } = req.body;
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { title, author, content, tags },
  );
  
  return res.status(200).json({
    statusCode: 200,
    message: 'Updated post',
    data: {},
  });
});

/* DELETE post */
router.delete('/:id', async (req, res, next) => {
  const result = await Post.deleteOne({ _id: req.params.id });
  return res.status(200).json({
    statusCode: 200,
    message: `Deleted ${result.deletedCount} post(s)`,
    data: {},
  });
});




module.exports = router;