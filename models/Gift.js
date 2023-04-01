const mongoose = require("mongoose");

const GiftSchema = new mongoose.Schema({
  gift: {
    type: String,
    required: true,
  },
    link: {
    type: String,
  },
  note: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
    claimedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
    claimed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Gift", GiftSchema);
