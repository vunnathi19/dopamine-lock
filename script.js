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


let checkbox =
    document.createElement("input");

checkbox.type = "checkbox";


let span =
    document.createElement("span");

span.textContent = taskText;


checkbox.addEventListener("change", function () {

    if (checkbox.checked) {

        span.style.textDecoration =
            "line-through";

        span.style.opacity = "0.6";
    }

    else {

        span.style.textDecoration =
            "none";

        span.style.opacity = "1";
    }
});


li.appendChild(checkbox);

li.appendChild(span);

    document
        .getElementById("taskList")
        .appendChild(li);

    taskInput.value = "";
}
