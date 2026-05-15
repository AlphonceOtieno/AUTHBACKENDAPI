const express = require("express");
const router = express.Router();

const {
    addBook,
    getBooks,
    getBook
} = require("../controllers/bookController");

const protect = require("../middleware/authMiddleware");

// CREATE
router.post("/", protect, addBook);

// READ ALL
router.get("/", getBooks);

// READ ONE
router.get("/:id", getBook);

module.exports = router;