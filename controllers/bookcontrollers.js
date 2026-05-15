const Book = require("../models/Book");

// CREATE BOOK
const addBook = async (req, res) => {
    try {
        const { title, author, isbn } = req.body;

        const book = await Book.create({
            title,
            author,
            isbn,
            user: req.user.id
        });

        res.status(201).json(book);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//get all books
const getBooks = async (req, res) => {
    const books = await Book.find().populate("user", "name email");
    res.json(books);
};

//get a single book
const getBook = async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
};


//export
module.exports = {
    addBook,
    getBooks,
    getBook
};

