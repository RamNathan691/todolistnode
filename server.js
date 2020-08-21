const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env' })
const app = express()
connectDB()
const todolist = require('./routes/todo')
app.use('/todolist', todolist)

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} ON PORT :${PORT}`
  )
)
// handled and unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error:${err.message}`)
  // close server &exit process
  server.close(() => {
    process.exit(1)
  })
})
