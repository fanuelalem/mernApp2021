const router = require('express').Router();
  
 const userName = require('./userRoutes');
 
 
 
 
 router.use('/user', userName);

module.exports = router;
