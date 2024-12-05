const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')
const eventRoutes = require('./src/routes/eventRoutes')


require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(cors())
app.use(express.json())

app.use ('/api', eventRoutes)


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})                