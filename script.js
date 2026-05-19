// INTRO SCREEN DELAY
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


// ADD TASK FUNCTION
function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
