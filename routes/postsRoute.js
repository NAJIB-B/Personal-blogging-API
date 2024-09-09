const express = require("express");

const {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletPost
} = require("../controllers/postsController");

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);

router.route("/:id").get(getPost).patch(updatePost).delete(deletPost)

module.exports = router;
