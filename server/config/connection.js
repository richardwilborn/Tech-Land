const mongoose = require('mongoose');

mongoose.connect(
    //Make sure port number is right
    process.env.MONGODB_URI || 'mongodb+srv://techland123:techland123@cluster1.t26etpg.mongodb.net/techLand?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  module.exports = mongoose.connection;
