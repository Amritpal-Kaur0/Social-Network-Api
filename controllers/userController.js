const thought = require('../models/thought');
const User = require('../models/user');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async singleuser(req, res) {
    try {
        const getById = await User.findOne({ _id: req.params.userId }).populate("thoughts").populate('friends');
        if (!getById) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        res.status(200).json(getById)
    }
    catch (err) {
        console.error(err);
    }
},


  //update user
  async updateUser(req, res) {
    try{
        const updateuser = await User.findOneAndUpdate(
    { _id: req.params.userId},
             {$set: req.body },
             { runValidators: true, new: true }
        )
        if (!updateuser) {
            return res.status(404).json({ message: 'No user updated' });
        }
        res.status(200).json(updateuser)
    }catch(err){
        console.error(err)
    }
},
 //Delete  user 
 async deleteUser(req, res) {
  try {
      const Userdel = await User.findOneAndDelete({ _id: req.params.userId })
      if (!Userdel) {
          return res.statusCode().json({ message: "Can't find this User " })
      }
      res.status(200).json({ message: ' Sucessfully deleted User BY Id' })
  } catch (err) {
      console.error(err)
  }
},
//create User
async createUser(req, res) {
  try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser)
  } catch (err) {
      console.error(err)
  }
},

//add friend
async addFriend(req,res){
  try{
    const newFriend=await User.findByIdAndUpdate({_id:req.params.userId},
      {
        $push:{friends:req.params.friendId}
      },
      {new:true}
      )
      res.status(200).json(newFriend)
  }catch(err){
    console.error(err)
  }
},
async delFriend(req, res) {
  try {
      const delFriend = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
      );

      if (!delFriend) {
          return res.status(404).json({ message: "Can't find this user" });
      }

      res.status(200).json({ message: 'Friend successfully deleted' });
  } catch (err) {
      console.error(err);
  }
},
};
