setTimeout(function () {

    document
        .getElementById("intro")
        .style.display = "none";

    document
        .querySelector(".container")
        .classList.remove("hidden");

}, 4000);



function addTask() {

    let taskInput =
        document.getElementById("taskInput");

    let taskText =
        taskInput.value;

    if(taskText === "") {

        alert("Please enter a task");

        return;
    }

    let li =
        document.createElement("li");

    li.textContent = taskText;

    document
        .getElementById("taskList")
        .appendChild(li);

    taskInput.value = "";
}
