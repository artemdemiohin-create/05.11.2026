let heading = document.querySelector("#heading");

document.querySelector("#color")
.addEventListener("click", function() {
    heading.style.color = "red";
});

document.querySelector("#background")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "pink";
});

//3

let skills = document.querySelector("#skills");

let item1 = document.createElement("li");
item1.textContent = "HTML";

let item2 = document.createElement("li");
item2.textContent = "CSS";

let item3 = document.createElement("li");
item3.textContent = "JavaScript";

skills.append(item1, item2, item3);

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Практика</title>
</head>
<body>

    <ul id="skills"></ul>

    <script src="script.js"></script>
</body>
</html>

//4

let paragraph = document.querySelector("#paragraph");
let deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", function() {
    paragraph.remove();
});

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Практика</title>
</head>
<body>

    <p id="paragraph">Этот текст нужно удалить.</p>
    <button id="delete">Удалить</button>

    <script src="script.js"></script>
</body>
</html>

//5

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

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мой список дел</title>
</head>
<body>

    <h2>Мой список дел</h2>

    <input type="text" id="taskInput">
    <button id="addButton">Добавить</button>
    <p id="counter">Задач: 0</p>

    <ul id="taskList"></ul>

    <script src="script.js"></script>
</body>
</html>
