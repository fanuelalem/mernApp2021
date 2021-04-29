const { text } = require('body-parser');
const { Name, Image } = require('../models/index');
const path = require('path')

module.exports = {

addName: async(req,res)=>{
  const {text} = req.body;
   if(!text){
    return res.status(400).json({error:'you must provide a text'})
  }
  try{
    const newName = await new Name({text}).save()
    return res.status(200).json(newName)
  } catch(e){
    return res.status(403).json({e:"this function has failed"})
  }
},
getName: async (req,res)=>{
   try {
    const Names = await Name.find();
    return res.json(Names);
  } catch (e) {
    return res.status(403).json({ e });
  }
},
postMyImages: async (req, res) => {
  
  const { fileName,filePath } = req.body;

  if(req.files === null) {
    return res.status(400).json({msf:'no file uploaded'})
  }
  try {

    const file = req.files.file

    file.mv(`${__dirname}/../client/public/images/${file.name}`,async (err)=>{
      if(err){
        console.error(err)
        return res.status(500).send(err)
      }

       const newImage = await new Image({fileName:file.name,filePath:`images/${file.name}`}).save();
        console.log(newImage,'new image')
      
      return res.status(200).json(newImage);
    })}catch (e) {
    console.log('error not hitting ')
    return res.status(403).json({ e });
  }
   
},
getMyImages: async (req, res) => {
  try {
    const images = await Image.find();
    return res.json(images);
  } catch (e) {
    return res.status(403).json({ e });
  }
 
}
}