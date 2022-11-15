const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/error.middleware")
const connectDB = require("./utility/db")
const port = process.env.PORT || 8080

connectDB()

const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", require("./routes/user.routes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
