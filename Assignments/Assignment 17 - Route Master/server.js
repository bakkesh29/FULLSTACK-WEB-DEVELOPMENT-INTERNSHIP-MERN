const express = require("express");
const app = express();

app.use(express.json());

// Data
let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" }
];

let authors = [
    { id: 1, name: "James Clear" }
];

// 📚 BOOK ROUTES

// GET all books
app.get("/books", (req, res) => {
    res.json(books);
});

// GET book by id
app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
});

// POST new book
app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).send("Book not found");

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Book deleted");
});


// ✍️ AUTHOR ROUTES

app.get("/authors", (req, res) => {
    res.json(authors);
});

app.post("/authors", (req, res) => {
    const newAuthor = {
        id: authors.length + 1,
        name: req.body.name
    };
    authors.push(newAuthor);
    res.json(newAuthor);
});

app.put("/authors/:id", (req, res) => {
    const author = authors.find(a => a.id == req.params.id);
    if (!author) return res.status(404).send("Author not found");

    author.name = req.body.name || author.name;
    res.json(author);
});

app.delete("/authors/:id", (req, res) => {
    authors = authors.filter(a => a.id != req.params.id);
    res.send("Author deleted");
});


// HOME
app.get("/", (req, res) => {
    res.send("Route Master API is running 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});