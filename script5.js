let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#taskList");
let counter = document.querySelector("#counter");

addButton.addEventListener("click", function() {
    let text = taskInput.value;

    if (text !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = text;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function() {
            newTask.remove();
            updateCount();
        });

        newTask.append(deleteButton);
        taskList.append(newTask);

        taskInput.value = "";
        updateCount();
    }
});

function updateCount() {
    let allTasks = document.querySelectorAll("#taskList li");
    counter.textContent = "Задач: " + allTasks.length;
}
