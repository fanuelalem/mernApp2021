const express = require('express');
const mongoose = require('mongoose');
 

const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
// Setup middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 
 
 if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

}

app.use("/",routes);
 
 // Connect database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userstockitem', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const MONGODB_URI = 'mongodb+srv://fanuelnalem:merrychristmas@merncluster.dl3yx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mernapp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.on('connected', ()=>{
  console.log('mongoose is connected')
})

// Classof2017
 

app.listen(PORT,()=>{
  console.log(`listening on PORT ${PORT}`)
});
