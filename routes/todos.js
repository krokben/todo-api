const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// @route  GET todos
// @desc   Get all todos
// @access Public
router.get('/', (req, res) => {
  Todo.find().then(todos => res.json(todos));
});

// @route  POST todos
// @desc   Add a todo
// @access Public
router.post('/', (req, res) => {
  const item = new Todo({
    text: req.body.text,
    category: req.body.category,
  });

  item.save().then(todo => res.json(todo));
});

// @route  PUT todos/:id
// @desc   Change property of todo
// @access Public
router.put('/:id', (req, res) => {
  if (req.body.property !== '_id') {
    Todo.findByIdAndUpdate(req.params.id, req.body.changes)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
  } else {
    res.status(404).json({ success: false });
  }
});

// @route   DELETE todos/:id
// @desc    Delete a todo
// @access  Public
router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
