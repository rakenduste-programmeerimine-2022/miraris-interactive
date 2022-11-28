const mongoose = require("mongoose")

const forumTopicSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("ForumTopic", forumTopicSchema)
