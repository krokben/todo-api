require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = {
  todos: require('./routes/todos'),
};

const app = express();
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
})

// Connect to MongoDB (DB in .env)
mongoose.connect(process.env.DB)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Routes
app.use('/todos', routes.todos);

const port = process.env.PORT;
app.listen(port || 3000, () => {
  console.log(`App listening on port ${port}...`);
});
