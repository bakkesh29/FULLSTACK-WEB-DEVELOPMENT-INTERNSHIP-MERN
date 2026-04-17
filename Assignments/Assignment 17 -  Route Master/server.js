const express = require("express");
const app = express();

app.use(express.json());

// Sample Data
let books = [
    { id: 1, title: "Deep Work", authorId: 1 },
    { id: 2, title: "Atomic Habits", authorId: 2 }
];

let authors = [
    { id: 1, name: "Cal Newport" },
    { id: 2, name: "James Clear" }
];


// ================= BOOK ROUTES =================

// GET all books
app.get("/books", (req, res) => {
    res.json(books);
});

// GET book by ID
app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);

    if (!book) {
        return res.status(404).send("Book not found");
    }

    res.json(book);
});

// POST create book
app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        authorId: req.body.authorId
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);

    if (!book) {
        return res.status(404).send("Book not found");
    }

    book.title = req.body.title || book.title;
    book.authorId = req.body.authorId || book.authorId;

    res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Book deleted");
});


// ================= AUTHOR ROUTES =================

// GET all authors
app.get("/authors", (req, res) => {
    res.json(authors);
});

// GET author by ID
app.get("/authors/:id", (req, res) => {
    const author = authors.find(a => a.id == req.params.id);

    if (!author) {
        return res.status(404).send("Author not found");
    }

    res.json(author);
});

// POST create author
app.post("/authors", (req, res) => {
    const newAuthor = {
        id: authors.length + 1,
        name: req.body.name
    };

    authors.push(newAuthor);
    res.status(201).json(newAuthor);
});

// PUT update author
app.put("/authors/:id", (req, res) => {
    const author = authors.find(a => a.id == req.params.id);

    if (!author) {
        return res.status(404).send("Author not found");
    }

    author.name = req.body.name || author.name;

    res.json(author);
});

// DELETE author
app.delete("/authors/:id", (req, res) => {
    authors = authors.filter(a => a.id != req.params.id);
    res.send("Author deleted");
});


// ================= SERVER =================
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});