const axios = require('axios');
require("dotenv").config();
var path = `http://localhost:${process.env.PORT}`;

test('receive response from get qa/questions', async () => {
  expect.assertions(1);

  return axios({
    method: 'get',
    url: `${path}/qa/questions`,
  }).then((response) => {
    expect(response.config.method).toBe('get');
  })
});

test('receive response from get answers', async () => {
  expect.assertions(1);

  return axios({
    method: 'get',
    url: `${path}/qa/questions/:question_id/answers`,
  }).then((response) => {
    expect(response.config.method).toBe('get');
  })
});

test('receive response from post qa/answers', async () => {
  expect.assertions(1);

  return axios({
    method: 'post',
    url: `${path}/qa/questions`,
  }).then((response) => {
    expect(response.config.method).toBe('post');
  })
});

test('receive response from post answers', async () => {
  expect.assertions(1);

  return axios({
    method: 'post',
    url: `${path}/qa/questions/:question_id/answers`,
  }).then((response) => {
    expect(response.config.method).toBe('post');
  })
});

test('receive response from put questions helpfulness', async () => {
  expect.assertions(1);

  return axios({
    method: 'put',
    url: `${path}/qa/questions/:question_id/helpful`,
  }).then((response) => {
    expect(response.config.method).toBe('put');
  })
});

test('receive response from put answers helpfulness', async () => {
  expect.assertions(1);

  return axios({
    method: 'put',
    url: `${path}/qa/answers/:answer_id/helpful`,
  }).then((response) => {
    expect(response.config.method).toBe('put');
  })
});

test('receive response from put questions reported', async () => {
  expect.assertions(1);

  return axios({
    method: 'put',
    url: `${path}/qa/questions/:question_id/report`,
  }).then((response) => {
    expect(response.config.method).toBe('put');
  })
});

test('receive response from put answers reported', async () => {
  expect.assertions(1);

  return axios({
    method: 'put',
    url: `${path}/qa/answers/:answer_id/report`,
  }).then((response) => {
    expect(response.config.method).toBe('put');
  })
});
