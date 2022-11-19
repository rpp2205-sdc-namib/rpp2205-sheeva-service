const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/atelierQA');

// Setup Schemas
let answersSchema = mongoose.Schema({
  body: String,
  name: String,
  helpfulness: Number,
  reported: Boolean,
  photos: [{ type: String }]
}, {timestamps: true});

let questionsSchema = mongoose.Schema({
  body: String,
  name: String,
  helpfulness: Number,
  reported: Boolean,
  answers: [answersSchema]
}, {timestamps: true});

let productSchema = mongoose.Schema({
  questions: [questionsSchema]
});


// Setup Models
let Product = mongoose.model('Product', productSchema);
let Question = mongoose.model('Question', questionsSchema);
let Answer = mongoose.model('Answer', answersSchema);