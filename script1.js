var title = document.getElementById('title');
var description = document.getElementById('description');
var button = document.getElementById('change');

button.addEventListener('click', function() {
    title.textContent = 'Добро пожаловать!';
    description.textContent = 'Мы изучаем js и dom';
});
