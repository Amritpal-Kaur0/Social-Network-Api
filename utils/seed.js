const connection = require('../config/connection');
const thought=require('../models/thought')
const user=require('../models/user');
const Userdata = require('./user');
const thoughtdata = require('./thought');
const reactiondata = require('./reaction');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  console.log("seeding...  🌴")
  // Delete the entries in the collection
  try{
  await user.deleteMany({});
  await thought.deleteMany({});


  // Wait for the user and thoughts to be inserted into the database
  await user.insertMany(Userdata);
  await thought.insertMany(thoughtdata);

  console.log('seeding complete 🌱');
  }catch(err){
    console.log(err)
  };  process.exit(0);
});
