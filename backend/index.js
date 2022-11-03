const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./utility/db")
const port = process.env.PORT || 8080

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => console.log(`Server started on port ${port}`))
