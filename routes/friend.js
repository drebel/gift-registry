const express = require("express");
const router = express.Router();
//const upload = require("../middleware/multer");
const friendsController = require("../controllers/friends");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/addFriend/:id", friendsController.addFriend);

router.delete("/deleteFriend/:id", friendsController.deleteFriend);

module.exports = router;
