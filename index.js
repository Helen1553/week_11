//Вариант первый - через if:

// document.getElementById('addButton').addEventListener('click', addTask); // Добавляем вызов функции addTask при клике на кнопку (которую сначала находим)

// function addTask() {
//     const input = document.getElementById('input'); // Создаём константу для нахождения нужного элемента (инпута) в коде
//     const taskValue = input.value.trim(); // Создаём новую константу, куда сохраняем результат извлечения введенного пользователем в инпут значения (input.value) + убираем лишние пробелы в начале и конце строки с помощью метода trim().

//     // Далее запускаем цикл
//     if (taskValue) {
//         const taskList = document.getElementById('taskList'); // Ищем в коде элемент списка, куда будут добавляться задачи
//         const newTask = document.createElement('li'); // Создаём новые элементы в тудушке

//         newTask.textContent = taskValue; // Говорим, что эти новые элементы, которые должны в итоге выводиться на экран - это и есть то, что пользователь ввел в инпут
//         newTask.addEventListener('click', toggleTaskCompletion); // Добавляем интерактивчика - когда пользоваатель будет кликать по задаче - она будет зачеркиваться (т.е. таким образом, пользователь сам может поставить себе задачу и сам же может вычеркнуть её при выполнении или ненадобности таковой)
//         taskList.append(newTask); // Добавляем новый элемент списка (тудушки) на страницу
//     }
// }
// //Функция, чтобы пользователь мог вычеркивать задачи из тудушки (aka пометка "выполнено")
// function toggleTaskCompletion(event) {
//     event.target.classList.toggle('completed');
// }


// Вариант второй - без if:

// Сначала ищем все необходимые элементы по коду
const taskInput = document.getElementById('input');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Создаём функцию, которая будет срабатывать при клике на кнопку (обработчик события - ниже)
    let addTask = () => {
         // переменная для значения = введенному значению в инпут от пользователя
        const newTask = document.createElement('li'); // создаём новый элемент списка
        newTask.textContent = taskInput.value; // новый элемент списка = то, что ввел пользователь
        taskList.append(newTask); // выводим новый элемент списка на экран

        newTask.addEventListener('click', toggleTaskCompletion); // вешаем обработчик событий при нажатии на элемент списка --> пользователь кликает на задачу - она зачеркивается (задача выполнена)
        taskInput.value = ''; // очищаем поле ввода, чтобы пользователю не приходилось делать это самостоятельно
    };

    //Функция для вычеркивания задач из тудушки (aka пометка "выполнено")
    function toggleTaskCompletion(event) {
        event.target.classList.toggle('completed');
    }

addButton.addEventListener('click', addTask); // создаём обработчик события --> при клике на кнопку --> срабатывает функция


let clickFunction = () =>{
    const click = document.getElementById('click')
    const image = document.getElementById('img');
    image.classList.toggle('hidden');
}
click.addEventListener('click', clickFunction);




