const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");
const protect = require("../middleware/authMiddleware");

// PUBLIC ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);

// PROTECTED ROUTE
router.get("/profile", protect, (req, res) => {
    res.json({
        message: "Protected data access granted",
        user: req.user
    });
});

module.exports = router;