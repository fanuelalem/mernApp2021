const { Schema, model } = require('mongoose');

const NameScema = new Schema({
  text: {
    type: String,
    required: true,
  },
 });

const Name = model('Name', NameScema);

module.exports = Name;