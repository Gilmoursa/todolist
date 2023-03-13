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
      taskItem.innerHTML = `${taskText.toUpperCase()} <span class="delete"> X</span> <span class="edit">Edit</span>`;
      taskList.appendChild(taskItem);
      taskInput.value = "";
  
      const deleteButton = taskItem.querySelector(".delete");
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });

      // Edit task
        const editButton = taskItem.querySelector(".edit");
        editButton.addEventListener("click", () => {
            const currentText = taskItem.firstChild.textContent;
            const newText = prompt("Edit task:", currentText);
            if (newText !== null) {
                taskItem.firstChild.textContent = newText.toUpperCase();
            }
        });
    }
  });