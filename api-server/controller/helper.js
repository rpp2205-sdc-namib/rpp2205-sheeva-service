module.exports = {
  getQuestions: (req, res) => {
    console.log('GET QUESTIONS');
  }

  getAnswers: (req, res) => {
    console.log('GET ANSWERS');
  }

  postQuestions: (req, res) => {
    console.log('POST QUESTIONS');
  }

  postAnswers: (req, res) => {
    console.log('POST ANSWERS');
  }

  putQuestionsHelpfulness: (req, res) => {
    console.log('PUT Q HELPFULNESS');
  }

  putAnswersHelpfulness: (req, res) => {
    console.log('PUT A HELPFULNESS');
  }

  putQuestionsReported: (req, res) => {
    console.log('PUT Q REPORTED');
  }

  putAnswersReported: (req, res) => {
    console.log('PUT A REPORTED');
  }
}