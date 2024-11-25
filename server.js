require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')


const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})