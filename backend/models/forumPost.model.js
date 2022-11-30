const mongoose = require("mongoose")

const forumPostSchema = mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ForumTopic"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    post: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("ForumPost", forumPostSchema)
