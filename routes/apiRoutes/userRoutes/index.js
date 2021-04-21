const router = require('express').Router();
const {
  addName,
  getName
} = require('./../../../controllers/userController');


 
 
// /api/user/name

router.route('/name')
.post(addName)
.get(getName)
 
 
 

module.exports = router;
