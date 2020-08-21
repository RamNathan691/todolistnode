const Todolist = require('../models/ToDolist')

// @desc  Get all ToDoList
// @route GET/api/todolist
// @access Public
exports.gettodolist = async (req, res, next) => {
  const todolist = await Todolist.find()
  res.status(200).json({ success: true, data: todolist })
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// @desc  SINGLE all ToDoList
// @route GET/api/todolist/:id
// @access Public
exports.gettodolist1 = async (req, res, next) => {
  const todolist = await Todolist.findById(req.params.id)
  res.status(200).json({ success: true, data: todolist })
  // res.status(400).json({ success: false })
}

// -------------------------------------------------------------------------------------------------------------------------------------------

// @desc  create all todolist
// @route POST/api/todolist/
// @access Private
exports.createtodolist = async (req, res, next) => {
  console.log(req.body)
  const todolist = await Todolist.create(req.body)
  if (todolist) { res.status(201).json({ success: true, data: todolist }) } else {
    res.status(400).json({ success: false })
  }
}
// ---------------------------------------------------------------------------------------------------------------------------------------------

// @desc   UPDATE a todolist
// @route PUT/api/todolist/:id
// @access Private
exports.updatetodolist = async (req, res, next) => {
  let todolist = await Todolist.findById(req.params.id)
  if (!todolist) {
    res.status(404).json({ success: false, data: {} })
  } else {
    todolist = await Todolist.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({ success: true, data: todolist })
  }
}
// -----------------------------------------------------------------------------------------------------------------------------------------------

// @desc  Delete A todolist
// @route DELETE/api/todolist/:id
// @access Private
exports.deletetodolist = async (req, res, next) => {
  const todolist = await Todolist.findById(req.params.id)
  if (!todolist) { res.status(404).json({ success: false, data: {} }) } else {
    todolist.remove()
    res.status(200).json({ success: true, data: {} })
  }
}
// --------------------------------------------------------------------------------------------------------------------------------------------------
