const asyncHandler = require("express-async-handler");
const cloudinary = require("cloudinary").v2;

const User = require("../models/userModel");
const Post = require("../models/postModel");

// @desc Create a new post
// @route POST /api/posts
// @access Private
const createPost = asyncHandler(async (req, res) => {
  const { description, imgFile, audioFile, videoFile } = req.body;

  if (!description) {
    res.status(400);
    throw new Error("Please write something");
  }

  // Get user using the id and the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const imageFileRes = await cloudinary.uploader.upload(
    req.files.imgFile.tempFilePath,
    { resource_type: "image", folder: "socialGram" }
  );
  console.log(imageFileRes);

  const audioFileRes = await cloudinary.uploader.upload(
    req.files.audioFile.tempFilePath,
    { resource_type: "auto", folder: "socialGram" }
  );
  console.log(audioFileRes);

  const videoFileRes = await cloudinary.uploader.upload(
    req.files.videoFile.tempFilePath,
    { resource_type: "video", folder: "socialGram" }
  );
  console.log(videoFileRes);

  const post = await Post.create({
    description,
    imgFile: {
      public_id: imageFileRes.public_id,
      secure_url: imageFileRes.secure_url,
    },
    audioFile: {
      public_id: audioFileRes.public_id,
      secure_url: audioFileRes.secure_url,
    },
    videoFile: {
      public_id: videoFileRes.public_id,
      secure_url: videoFileRes.secure_url,
    },
    user: req.user.id,
  });
  console.log(post);

  res.status(201).json(post);
});

// @desc Get user posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const products = await Post.find({ user: req.user.id });

  res.status(200).json(products);
});

// @desc Get all posts
// @route GET /api/posts/all
// @access Public
const getAllPosts = asyncHandler(async (req, res) => {
  const data = await Post.find();

  res.status(200).json(data);
});

// @desc Get user single post
// @route GET /api/posts/:id
// @access Private
const getPost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  // const user = await User.findById(req.user.id);

  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // if (post.user.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error("Not authorized");
  // }

  res.status(200).json(post);
});

// @desc Update post
// @route PUT /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updatedProduct = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
});

// @desc Delete post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await cloudinary.uploader.destroy(post.imgFile.public_id);

  await post.remove();

  res.status(200).json({ success: true });
});

module.exports = {
  createPost,
  getPosts,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
};
