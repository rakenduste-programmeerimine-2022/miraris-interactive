const mongoose = require("mongoose")

const forumTopicSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ForumCategory"
    },
    topic: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("ForumTopic", forumTopicSchema, "forumTopics")
