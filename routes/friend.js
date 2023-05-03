const express = require("express");
const router = express.Router();
//const upload = require("../middleware/multer");
const friendsController = require("../controllers/friends");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", friendsController.getFriends);

router.put("/addFriend/:id", friendsController.addFriend);

router.put("/deleteFriend/:id", friendsController.deleteFriend);

module.exports = router;
