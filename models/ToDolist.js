const mongoose = require('mongoose')
const TodolistSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, 'Please enter a task to be done'],
      maxlength: [100, 'Task can be more than 100 characters']
    }
  }
)
module.exports = mongoose.model('Todolist', TodolistSchema)
