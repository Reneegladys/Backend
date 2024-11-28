const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})                