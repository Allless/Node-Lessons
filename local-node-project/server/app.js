require('dotenv').config();
console.log(process.env.PORT);
const express = require('express');
const routes = require('../routes/tasks.js');

const app = express();

app.use(express.json());
app.use('/tasks', routes);

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`);
});

module.exports = app;
