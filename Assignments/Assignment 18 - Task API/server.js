const express = require("express");
const app = express();

app.use(express.json());

// Sample Task Data
let tasks = [
    { id: 1, title: "Study ML", completed: false },
    { id: 2, title: "Go to Gym", completed: true }
];


// ================= CRUD APIs =================

// ✅ GET all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});


// ✅ GET task by ID
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).send("Task not found");
    }

    res.json(task);
});


// ✅ CREATE task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});


// ✅ UPDATE task
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).send("Task not found");
    }

    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});


// ✅ DELETE task
app.delete("/tasks/:id", (req, res) => {
    const index = tasks.findIndex(t => t.id == req.params.id);

    if (index === -1) {
        return res.status(404).send("Task not found");
    }

    tasks.splice(index, 1);
    res.send("Task deleted");
});


// ================= SERVER =================
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});