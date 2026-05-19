
// INTRO SCREEN DELAY
setTimeout(function () {
    document.getElementById("intro").style.display = "none";
    document.querySelector(".container").classList.remove("hidden");
}, 4000);


// ADD TASK FUNCTION
function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // create list item
    let li = document.createElement("li");

    // checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // text
    let span = document.createElement("span");
    span.textContent = taskText;

    // toggle completed class (IMPORTANT FIX)
    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed", checkbox.checked);
    });

    // append elements
    li.appendChild(checkbox);
    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);

    // clear input
    taskInput.value = "";
}
