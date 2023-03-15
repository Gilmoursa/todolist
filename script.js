// Creating my variables
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const categoryList = document.getElementById("categoryList");
const categoryInput = document.getElementById("categoryInput");
const categoryEditButton = document.getElementById("categoryEditButton");
const categoryCancelButton = document.getElementById("categoryCancelButton");
const categoryAddButton = document.getElementById("categoryAddButton");

// Initializing categories array, preloading with 2 categories: business and personal
let categories = ['business', 'personal'];

// Add event listener to categoryEditButton
categoryEditButton.addEventListener("click", () => {
    // Show the category edit section
    document.getElementById("categoryEdit").style.display = "block";
});

// Add event listener to categoryCancelButton
categoryCancelButton.addEventListener("click", () => {
    // Hide the category edit section
    document.getElementById("categoryEdit").style.display = "none";
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
