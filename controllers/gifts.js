const Gift = require("../models/Gift");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const gifts = await Gift.find({ user: req.user.id });
      res.render("profile.ejs", { gifts: gifts, user: req.user });
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
      res.redirect("/profile")  
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
      res.redirect("/profile");
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
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
