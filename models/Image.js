const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
    filePath: {
      type:String
  },
    fileName:{
      type:String
  }
 });

const Image = model('Image', ImageSchema);

module.exports = Image;