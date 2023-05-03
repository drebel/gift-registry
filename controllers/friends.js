const FriendList = require("../models/FriendList");
const User = require("../models/User")

module.exports = {

  getFriends: async (req, res) => {
    try {
      const friendList = await FriendList.findOne({ user: req.user.id}).populate('friends')
      res.render("friends.ejs", { user: req.user, friendList: friendList });
    }catch (err) {
      console.log(err)
      res.redirect("back");
    }
  },

  addFriend: async (req, res) => {
    try {
      const myFriends = await FriendList.findOne({user: req.user.id})
      const theirFriends = await FriendList.findOne({user: req.params.id})
      //check to see if friend is on my friendList
      if(!myFriends.friends.includes(req.params.id)){
        // add friend to user's friend list if not
        await FriendList.updateOne(
          {user: req.user.id},
          {$push: {friends: req.params.id}}
        )
        console.log('added friend to users friendList')
      }else{
        console.log("Didnt add friend to user's friendList")
      }

      //check to see if user is on friend's friendList
      if(!myFriends.friends.includes(req.user.id)){
        //add user to friend's friend list
        await FriendList.updateOne(
          {user: req.params.id},
          {$push: {friends: req.user.id}}
        )
        console.log('added user to friends friendList')
      }else{
        console.log("Didnt add user to friend's friendList")
      }
      res.redirect("back")
    } catch (err) {
      res.redirect("back");
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
      res.redirect("back");
    } catch (err) {
      res.redirect("back");
    }
  },
};