const Thought = require("../models/thought");
const User = require("../models/user");

module.exports = {
  //get all thought
  async getThought(req, res) {
    try {
      const thought = await Thought.find();
      // const thought = await thought.find().sort({createdAt:-1});
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
async createThought(req,res){
  try{
    const createThought=await Thought.create(req.body);
    res.status(200).json(createThought)
  }catch(err){
console.log(err)
  }
},
  //get single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No post with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // post Reaction
  async postReaction(req, res) {
    try {
      const addReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {
          $push: {
            reactions: req.body,
          },
        },
        { new: true }
      );
      res.status(200).json(addReaction);
    } catch (err) {
      console.error(err);
    }
  },
  //delete reaction
  async delReaction(req, res) {
    try {
      const deleteReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        // {$pull:{reaction:req.params.reactionId}},

        { $pull: { reactions: { _Id: req.params.reactionsId } } },
        {
          new: true,
        }
      );
      if (!deleteReaction) {
        return res.status(500).json({ message: "REaction NOt FOund" });
      }
      res.status(200).json({ message: "deleted " });
    } catch (err) {
      console.error(err);
    }
  },

  // create a new thought
  async postThought(req, res) {
    try {
      // const createThoughts = await thoughts.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      res.status(200).json({ message: "done" });
    } catch (err) {
      console.error(err);
    }
  },

  //update thought
  async updateThought(req, res) {
    await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "thought not found" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  //delete thought
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!deletedThought) {
        return res.status(404).json({ message: "thought not found ." });
      }
      res.status(200).json({ message: "Thought Deleted" })
    } catch (err) {
      console.error(err);
    };
  },
};
