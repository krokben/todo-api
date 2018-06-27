const mongoose = require('mongoose');

mongoose.connect(process.env.DB);

const TodoSchema = mongoose.Schema({
  text: {
    type: String,
  },
  category: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);
