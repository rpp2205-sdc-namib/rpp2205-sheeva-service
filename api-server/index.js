require("dotenv").config();
const express = require('express');
const logger = require('./middleware/logger.js');
const controller = require('./controller/helper.js');

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded());
app.use(logger);

app.get('/qa/questions', controller.getQuestions);
app.get('/qa/questions/:question_id/answers', controller.getAnswers);
app.post('/qa/questions', controller.postQuestions);
app.post('/qa/questions/:question_id/answers', controller.postAnswers);
app.put('/qa/questions/:question_id/helpful', controller.putQuestionsHelpfulness);
app.put('/qa/questions/:question_id/report', controller.putQuestionsReported);
app.put('/qa/answers/:answer_id/helpful', controller.putAnswersHelpfulness);
app.put('/qa/answers/:answer_id/report', controller.putAnswersReported);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});