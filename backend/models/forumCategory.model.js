const mongoose = require("mongoose")

const forumCategorySchema = mongoose.Schema(
  {
    category: {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("ForumCategory", forumCategorySchema)
