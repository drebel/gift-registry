const Gift = require("../models/Gift");
const FriendList = require("../models/FriendList")

module.exports = {
  getHome: async (req, res) => {
    try {
      const gifts = await Gift.find({ user: req.user.id }).populate('claimedBy', 'userName');
      const friendList = await FriendList.findOne({ user: req.user.id}).populate('friends')
      console.log(friendList.friends)
      res.render("home.ejs", { gifts: gifts, user: req.user, friendList: friendList });
    } catch (err) {
      console.log(err);
    }
  },
  claimGift: async (req, res) => {
    try {
      await Gift.findOneAndUpdate(
        {_id: req.params.id},
        {claimedBy: req.user.id, claimed: true},
        {new: true}
      )
      res.redirect("/home")  
    } catch {
      console.log(err)
    }
  },
  unclaimGift: async (req, res) => {
    try {
      await Gift.findOneAndUpdate(
        {_id: req.params.id},
        {claimedBy: null, claimed: false},
        {new: true}
      )
      res.redirect("/home")  
    } catch {
      console.log(err)
    }
  },
  addGift: async (req, res) => {
    try {
      await Gift.create({
      gift: req.body.gift,
      link: req.body.link,
      note: req.body.note,
      user: req.user.id,
      claimed: false
      });
      console.log("Gift has been added!");
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  },
  deleteGift: async (req, res) => {
    try {
      // Find gift by id
      let gift = await Gift.findById({ _id: req.params.id });
      // Delete gift from db
      await Gift.remove({ _id: req.params.id });
      console.log("Deleted Gift");
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  },
};
