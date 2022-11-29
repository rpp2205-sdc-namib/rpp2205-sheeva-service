const axios = require('axios');

test('test api', () => {
  axios({
    method: 'get',
    url: 'http://localhost:3000/qa/questions',
  }).then(() => {
    expect(1+1).toBe(2);
  })
});