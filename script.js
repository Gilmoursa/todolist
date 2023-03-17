// Creating my variables
const taskInput = document.getElementById("task-input");
const categorySelect = document.getElementById("category-select");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const categoryList = document.getElementById("category-list");
const categoryInput = document.getElementById("category-input");
const categoryEditButton = document.getElementById("category-edit-button");
const categoryCancelButton = document.getElementById("category-cancel-button");
const categoryAddButton = document.getElementById("category-add-button");

// Initializing categories array, preloading with 2 categories: business and personal
let categories = ['business', 'personal'];

// Add event listener to categoryEditButton
categoryEditButton.addEventListener("click", () => {
    const categoryEdit = document.getElementById("category-edit");
    // Show the category edit section
    if (categoryEdit.style.display === "none") {
        categoryEdit.style.display = "block";
        categoryEditButton.innerHTML = "Hide Categories";
    } else {
        categoryEdit.style.display = "none";
        categoryEditButton.innerHTML = "Edit Categories";
    }
});

// Add event listener to categoryAddButton
categoryAddButton.addEventListener("click", () => {
    // Add the new category to the categories array
    const newCategory = categoryInput.value.trim();
    if (newCategory !== "" && !categories.includes(newCategory)) {
        categories.push(newCategory);
        updateCategoryList();
        categoryInput.value = "";
    }
});

// Function to update the category list
function updateCategoryList() {
    // Clear the category list
    categoryList.innerHTML = "";
    // Add each category to the category list
    categories.forEach((category) => {
        const categoryItem = document.createElement("li");
        categoryItem.innerHTML = `${category} <span class="delete"> X</span>`;
        categoryList.appendChild(categoryItem);

        // Add event listener to delete button
        const deleteButton = categoryItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            // Remove the category from the categories array and update the category list
            categories = categories.filter((item) => item !== category);
            updateCategoryList();
        });
    });

    // Update the category select options
    categorySelect.innerHTML = `<option value="">Select a category</option>`;
    categories.forEach((category) => {
        categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
    });
}

// Call updateCategoryList function to initialize the category list
updateCategoryList();

// Creating and deleting tasks
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        const category = categorySelect.value;
        taskItem.innerHTML = `${taskText} <span class="category ${category.toUpperCase()}">${category.toUpperCase()}</span><span class="delete"> X</span> <span class="edit">Edit</span>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        categorySelect.value = "";

        // Delete task
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
                taskItem.firstChild.textContent = newText;
            }
        });
    }
});
