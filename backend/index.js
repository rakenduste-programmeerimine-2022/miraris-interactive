const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/error.middleware")
const connectDB = require("./utility/db")
const port = process.env.PORT || 8080

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", require("./routes/user.routes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
