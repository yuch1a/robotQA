var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var vocabularySchema = new Schema({
  vocabularyTable: String,
});

module.exports = mongoose.model('Vocabulary', vocabularySchema);