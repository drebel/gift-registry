const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const indexController = require("../controllers");
const giftsController = require("../controllers/gifts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", indexController.getIndex);
router.get("/home", ensureAuth, giftsController.getHome);
//router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
