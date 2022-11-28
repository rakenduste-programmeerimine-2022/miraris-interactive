const mongoose = require("mongoose")

const forumPostSchema = mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    post: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("ForumPost", forumPostSchema)
