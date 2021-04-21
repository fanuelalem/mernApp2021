const { text } = require('body-parser');
const { User, Stock, Image } = require('../models/index');
const Name = require('../models/Name');
  
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
}
}