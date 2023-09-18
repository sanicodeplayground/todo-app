// Function to handle the visual indication of task completion
function handleTaskCompletion(checkbox) {
  // Get the task description text associated with the checkbox
  const taskText = checkbox.nextElementSibling;

  // If the checkbox is checked, strike through the task text
  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    // Otherwise, remove the strike through
    taskText.style.textDecoration = "none";
  }
}
