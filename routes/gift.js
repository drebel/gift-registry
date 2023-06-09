const express = require("express");
const router = express.Router();
//const upload = require("../middleware/multer");
const giftsController = require("../controllers/gifts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/addGift", giftsController.addGift);

router.put("/claimGift/:id", giftsController.claimGift)

router.put("/unclaimGift/:id", giftsController.unclaimGift)

router.delete("/deleteGift/:id", giftsController.deleteGift);

module.exports = router;
