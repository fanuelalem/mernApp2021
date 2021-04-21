const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
  fileName: {
    type: String
  },
  filePath: {
      type:String
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
 });

const Image = model('Image', ImageSchema);

module.exports = Image;