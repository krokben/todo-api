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
  const todo = new Todo({
    text: req.body.text,
    category: req.body.category,
  });

  todo.save().then(item => res.json(item));
});

module.exports = router;
