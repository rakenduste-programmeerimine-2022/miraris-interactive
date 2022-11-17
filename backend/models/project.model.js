const mongoose = require("mongoose")

const projectSchema = mongoose.Schema(
  {
    id: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    content: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Project", projectSchema)
