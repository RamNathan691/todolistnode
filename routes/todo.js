const express = require('express')
const router = express.Router()
const {
  gettodolist,
  gettodolist1,
  createtodolist,
  updatetodolist,
  deletetodolist

} = require('../controllers/todolist')
router.get('/', gettodolist)
router.get('/:id', gettodolist1)
router.put('/:id', updatetodolist)
router.delete('/:id', deletetodolist)
router.post('/', createtodolist)
module.exports = router