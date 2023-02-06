const Comment = require("../models/comment");
const validator = require("validator");

module.exports = {
  createComment: async function ({ commentInput }, req) {
    const errors = [];
    if (
      validator.isEmpty(commentInput.name) ||
      !validator.isLength(commentInput.name, { min: 3 })
    ) {
      errors.push({ message: "Name is invalid." });
    }
    if (
      validator.isEmpty(commentInput.email) ||
      !validator.isLength(commentInput.email, { min: 3 }) ||
      !commentInput.email.includes("@")
    ) {
      errors.push({ message: "Email is invalid." });
    }
    if (
      validator.isEmpty(commentInput.message) ||
      !validator.isLength(commentInput.message, { min: 5 })
    ) {
      errors.push({ message: "Message is invalid." });
    }
    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }

    const comment = new Comment({
      name: commentInput.name,
      email: commentInput.email,
      message: commentInput.message,
    });
    const createdComment = await comment.save();
    return {
      ...createdComment._doc,
      _id: createdComment._id.toString(),
      createdAt: createdComment.createdAt.toISOString(),
      updatedAt: createdComment.updatedAt.toISOString(),
    };
  },

  comments: async function ({ page = 1, sort = -1 }, req) {
    const perPage = 4;
    const totalComments = await Comment.find().countDocuments();
    const comments = await Comment.find()
      .sort({ createdAt: sort })
      .skip((page - 1) * perPage)
      .limit(perPage);
    return {
      comments: comments.map((p) => {
        return {
          ...p._doc,
          _id: p._id.toString(),
          createdAt: new Date(p.createdAt.toISOString())
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" "),
          updatedAt: p.updatedAt.toISOString(),
        };
      }),
      totalComments: totalComments,
    };
  },
};
