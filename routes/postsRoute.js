const express = require("express");
const { body } = require("express-validator");

const {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletPost,
} = require("../controllers/postsController");

const router = express.Router();

router
  .route("/")
  .get(getAllPosts)
  .post(
    body("title").notEmpty().withMessage("A blog post must have a title"),
    body("content")
      .notEmpty()
      .withMessage("A blog post must have some content"),
    body("category").notEmpty().withMessage('A blog post must have a category'),
    body("tags").isArray({min: 0}),
    createPost,
  );

router.route("/:id").get(getPost).patch(updatePost).delete(deletPost);

module.exports = router;
