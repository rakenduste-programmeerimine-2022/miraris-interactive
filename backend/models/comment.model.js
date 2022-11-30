const mongoose = require("mongoose")

const commentSchema = mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "News"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    comment: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Comment", commentSchema)
