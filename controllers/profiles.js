const FriendList = require("../models/FriendList");
const Gift = require("../models/Gift");
const User = require("../models/User");
//const FreindList = require("../models/FriendList");

module.exports = {
    getProfile: async (req, res) => {
        try{
            const gifts = await Gift.find({ user: req.params.id }).sort({ createdAt: -1 }).populate('claimedBy', 'userName')
            const profile = await User.findOne({_id: req.params.id})
            const myFriends = await FriendList.findOne({user: req.user.id})
            const isFriend = myFriends.friends.includes(req.params.id)
            res.render("profile.ejs", {gifts: gifts, user: req.user, profile: profile, isFriend: isFriend})
        }catch(err){
            console.log(err)
        }
    }
};