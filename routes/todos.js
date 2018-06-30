const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// @route  GET todos
// @desc   Get all todos
// @access Public
router.get('/', (req, res) => {
  Todo.find().then(todos => res.json(todos));
});

// @route  POST todos/add
// @desc   Add a todo
// @access Public
router.post('/add', (req, res) => {
  const item = new Todo({
    text: req.body.text,
    category: req.body.category,
  });

  item.save().then(todo => res.json(todo));
});

// @route   DELETE todos/delete/:id
// @desc    Delete a todo
// @access  Public
router.delete('/delete/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
