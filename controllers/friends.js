const FriendList = require("../models/FriendList");

module.exports = {
  addFriend: async (req, res) => {
    try {
      // Find friend by id
      let friend = await FriendList.findById({ _id: req.params.id });
      // add friend to db
      await FriendList.add({ _id: req.params.id });
      
    } catch (err) {
      res.redirect("/profile");
    }
  },
  deleteFriend: async (req, res) => {
    try {
      // Find gift by id
      let gift = await Gift.findById({ _id: req.params.id });
      // Delete gift from db
      await Gift.remove({ _id: req.params.id });
      console.log("Deleted Gift");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};





// // Add some friends to the friend list
// const friend1 = await User.findOne({ username: 'friend1' });
// friendList.friends.push(friend1._id);

// const friend2 = await User.findOne({ username: 'friend2' });
// friendList.friends.push(friend2._id);

// // Save the friend list to the database
// await friendList.save();
