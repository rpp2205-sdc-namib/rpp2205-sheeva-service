const axios = require('axios');
require("dotenv").config();
var path = `http://localhost:${process.env.PORT}`;

test('test api', () => {
  axios({
    method: 'get',
    url: `${path}/qa/questions`,
  }).then(() => {
    expect(1+1).toBe(2);
  })
});