module.exports = {
  getQuestions: (req, res) => {
    console.log('GET QUESTIONS');
    res.send();
  },

  getAnswers: (req, res) => {
    console.log('GET ANSWERS');
    res.send();

  },

  postQuestions: (req, res) => {
    console.log('POST QUESTIONS');
    res.send();

  },

  postAnswers: (req, res) => {
    console.log('POST ANSWERS');
    res.send();

  },

  putQuestionsHelpfulness: (req, res) => {
    console.log('PUT Q HELPFULNESS');
    res.send();

  },

  putAnswersHelpfulness: (req, res) => {
    console.log('PUT A HELPFULNESS');
    res.send();

  },

  putQuestionsReported: (req, res) => {
    console.log('PUT Q REPORTED');
    res.send();

  },

  putAnswersReported: (req, res) => {
    console.log('PUT A REPORTED');
    res.send();

  }
}