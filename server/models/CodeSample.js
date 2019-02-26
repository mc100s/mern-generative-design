const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSampleSchema = new Schema({
  name: String,
  code: String,
});

const CodeSample = mongoose.model('CodeSample', codeSampleSchema);
module.exports = CodeSample;
