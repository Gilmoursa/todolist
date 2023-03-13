// JS to create the todo list will go here

// creating my variables
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
// creating and deleting tasks
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `${taskText} <span>X</span>`;
      taskList.appendChild(taskItem);
      taskInput.value = "";
  
      const deleteButton = taskItem.querySelector("span");
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
    }
  });