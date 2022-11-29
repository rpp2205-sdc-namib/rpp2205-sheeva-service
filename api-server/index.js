require("dotenv").config();
const axios = require('axios');
const express = require('express');
const logger = require("./middleware/logger");
const controller = require('./controller/helper.js');

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded());
//app.use(logger);
//app.get('/products/:product_id', getProductHandler);


app.get('/qa/questions');
app.get('/qa/questions/:question_id/answers');
app.post('/qa/questions');
app.post('/qa/questions/:question_id/answers');
app.put('/qa/questions/:question_id/helpful');
app.put('/qa/questions/:question_id/report');
app.put('/qa/answers/:answer_id/helpful');
app.put('/qa/answers/:answer_id/report');


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});