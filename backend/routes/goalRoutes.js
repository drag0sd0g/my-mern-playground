const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

//all goal routes are protected i.e. they will pass through the auth middleware
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
