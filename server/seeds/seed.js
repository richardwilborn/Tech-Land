const db = require('../config/connection');

db.once('open', async () => {
    try {
        //Might change Profile to User, depending on naming conventions
      await Profile.deleteMany({});
      await Profile.create(profileSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });

  // Need to create a server.js file, which links everything together.
  // At the bottom of the server.js file, make sure to include:

  // // Call the async function to start the server
  //startApolloServer(typeDefs, resolvers);

  //at the bottom

  // use node seed.js to populate db. Once it's populated, you can
  //use your resolvers and typedefs

  //Models link to seeds, which link to connection.js, which links to server.js,
  // which calls up typedef and resolvers.