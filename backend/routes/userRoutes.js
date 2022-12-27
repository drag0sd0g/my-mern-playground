const express = require("express");
const { getMe } = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");

const router = express.Router();
const { registerUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe); //only need token for fetching current user

module.exports = router;
