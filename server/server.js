var AWS = require('aws-sdk');
const cors = require('cors');
const express = require('express')
const app = express();
const routes = require('./utils/routes');
app.use(cors());
app.use(express.json());

const port = 3000
app.use(routes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;