const router = require('express').Router();
const {
  addName,
  getName,
  getMyImages,
  postMyImages
} = require('./../../../controllers/userController');

const multer = require('multer')

const upload = multer({dest:''}) 


// /api/user/name

router.route('/name')
.post(addName)
.get(getName)

router.route('/myimages')
 .get(getMyImages)
 .post(upload.single('file'),postMyImages)
 

 
 
 

module.exports = router;
