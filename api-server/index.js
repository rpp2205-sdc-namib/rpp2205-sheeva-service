require("dotenv").config();
const axios = require('axios');
const express = require('express');
const logger = require("./middleware/logger");

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded());
//app.use(logger);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});