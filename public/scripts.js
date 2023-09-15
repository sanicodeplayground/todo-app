function handleTaskCompletion(checkbox, index) {
  console.log("handleTaskCompletion is triggered for index", index);
  const taskText = checkbox.nextElementSibling;
  const index = checkbox.getAttribute("data-index");

  tasks[index].checked = checkbox.checked;

  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}
