const mongoose = require("mongoose")

const newsSchema = mongoose.Schema(
  {
    header: {
      type: String
    },
    introduction: {
      type: String
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("News", newsSchema)
