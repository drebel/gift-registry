const mongoose = require("mongoose");

const FriendListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  ]
});

module.exports = mongoose.model("FriendList", FriendListSchema);
