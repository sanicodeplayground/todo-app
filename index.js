// Import necessary modules
import express from "express";
import bodyParser from "body-parser";

// Initialise express app
const app = express();

// Set specified port
const port = 3000;

// Empty tasks for main and work lists
let tasks = [];
let workTasks = [];

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use bodyParser to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the main todo list page
app.get("/", (req, res) => {
  // Generate the cirrent date in a specific format
  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const displayDate = `${weekdays[today.getDay()]}, 
  ${months[today.getMonth()]} 
  ${today.getDate()}`;
  res.render("index.ejs", { date: displayDate, tasks: tasks });
});

// Route to add a new task to the main todo list
app.post("/add-task", (req, res) => {
  const taskText = req.body.task;
  if (taskText) {
    tasks.push({ description: taskText, checked: false });
  }
  res.redirect("/");
});

// Route to render the work todo list page
app.get("/work", (req, res) => {
  res.render("work.ejs", { workTasks: workTasks });
});

// Route to add a new task to the work todo list
app.post("/work/add-task", (req, res) => {
  const taskText = req.body.task;
  if (taskText) {
    workTasks.push({ description: taskText, checked: false });
  }
  res.redirect("/work");
});

// Start server and listen to the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
