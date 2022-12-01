const mongoose = require("mongoose")

const forumCategorySchema = mongoose.Schema(
  {
    category: {
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

module.exports = mongoose.model(
  "ForumCategory",
  forumCategorySchema,
  "forumCategories"
)
