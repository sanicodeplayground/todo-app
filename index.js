import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let tasks = [];
let workTasks = [];

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
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

app.post("/add-task", (req, res) => {
  const taskText = req.body.task;
  if (taskText) {
    tasks.push({ description: taskText, checked: false });
  }
  res.redirect("/");
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { workTasks: workTasks });
});

app.post("/work/add-task", (req, res) => {
  const taskText = req.body.task;
  if (taskText) {
    workTasks.push({ description: taskText, checked: false });
  }
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
