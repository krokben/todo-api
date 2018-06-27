require('dotenv').config();
const express = require('express');

const app = express();
const routes = {
  todos: require('./routes/todos'),
};

app.use('/todos', routes.todos);

const port = process.env.PORT;
app.listen(port || 3000, () => {
  console.log(`App listening on port ${port}...`);
});
