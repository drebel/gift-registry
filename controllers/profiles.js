const Gift = require("../models/Gift");
//const FreindList = require("../models/FriendList");

module.exports = {
    getProfile: async (req, res) => {
        try{
            const gifts = await Gift.find({ user: req.params.id }).populate('claimedBy', 'userName')
            res.render("profile.ejs", {gifts: gifts, user: req.user, profile: req.params.id})
        }catch(err){
            console.log(err)
        }
    }
};