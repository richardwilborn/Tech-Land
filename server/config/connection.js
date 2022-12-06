mongoose.connect(
    //Make sure port number is right
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:4000/use-mutation',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  module.exports = mongoose.connection;
