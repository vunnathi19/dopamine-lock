
// INTRO DELAY
setTimeout(function () {
    document.getElementById("intro").style.display = "none";
    document.querySelector(".container").classList.remove("hidden");
}, 4000);


// ENTER KEY SUPPORT
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}


// LOAD FROM LOCALSTORAGE
window.onload = function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(task => {
        createTask(task.text, task.completed);
    });
};


// ADD TASK
function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    createTask(taskText, false);
    taskInput.value = "";

    saveTasks();
}


// CREATE TASK
function createTask(taskText, completed) {

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    let span = document.createElement("span");
    span.textContent = taskText;

    if (completed) {
        span.classList.add("completed");
    }

    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed", checkbox.checked);
        saveTasks();
    });

    let delBtn = document.createElement("button");
    delBtn.textContent = "✕";

    delBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
}


// SAVE TO LOCALSTORAGE
function saveTasks() {

    let tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {

        let span = li.querySelector("span");
        let checkbox = li.querySelector("input");

        tasks.push({
            text: span.textContent,
            completed: checkbox.checked
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
