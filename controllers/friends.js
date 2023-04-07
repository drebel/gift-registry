const FriendList = require("../models/FriendList");
const User = require("../models/User")

module.exports = {
  addFriend: async (req, res) => {
    try {
      // is the input user did a valid user?
      // if so, check to see if they are on my friends list already
      // if not, add them to my friend list, and me on theirs
      // check to see if the user ID is valid
      try{
        const theirDoc = await FriendList.findOne({user: req.body.newFriendId})
      }catch(err){
        console.log("the user ID you entered is not valid")
      }
      
      // check to see if two users are already friends
      const myFriends = await FriendList.findOne({user: req.user.id})
      const theirFriends = await FriendList.findOne({user: req.body.newFriendId})
      if(!myFriends.friends.includes(req.body.newFriendId && !myFriends.friends.includes(req.user.id))){
        // add friend to user's friend list
        await FriendList.updateOne(
          {user: req.user.id},
          {$push: {friends: req.body.newFriendId}}
        )
        // add user to friend's friend list
        await FriendList.updateOne(
          {user: req.body.newFriendId},
          {$push: {friends: req.user.id}}
        )
        console.log('added both users to each others friend list or ')
      }else{
        console.log('already friends, or one person already exists on a friend list by accident')
      }
      res.redirect("/home")
    } catch (err) {
      res.redirect("/home");
    }
  },
  deleteFriend: async (req, res) => {
    try {
      //remove friend from users friend list
      await FriendList.updateOne(
        {user: req.user.id},
        {$pull: {friends: req.params.id}}
      )
      //remove user from friends friend list
      await FriendList.updateOne(
        {user: req.params.id},
        {$pull: {friends: req.user.id}}
      )
      res.redirect("/home");
    } catch (err) {
      res.redirect("/home");
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
