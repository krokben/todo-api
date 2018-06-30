require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = {
  todos: require('./routes/todos'),
};

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Routes
app.use('/todos', routes.todos);

const port = process.env.PORT;
app.listen(port || 3000, () => {
  console.log(`App listening on port ${port}...`);
});
