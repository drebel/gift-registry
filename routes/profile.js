const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profiles")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//profile Routes

router.get("/:id", profileController.getProfile)

module.exports = router