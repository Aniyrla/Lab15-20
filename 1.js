document.getElementById("fixedButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function showAd() {
    alert("Посетите наш сайт для уникальных товаров и услуг!");
}

// Задаем интервал для появления рекламных окон (например, каждые 30 секунд)
setInterval(showAd, 100000);

//СОБЫТИЯ МЫШИ

// Событие клика
document.getElementById("myElement").addEventListener("click", function(event) {
    console.log("Мышь кликнула на элемент", event);
});
// Событие нажатия кнопки мыши
document.getElementById("myElement").addEventListener("mousedown", function(event) {
    console.log("Нажата кнопка мыши", event);
});
// Событие отпускания кнопки мыши
document.getElementById("myElement").addEventListener("mouseup", function(event) {
    console.log("Отпущена кнопка мыши", event);
});
// Событие перемещения мыши
document.getElementById("myElement").addEventListener("mousemove", function(event) {
    console.log("Мышь перемещается", event);
});

//СОБЫТИЯ КЛАВИАТУРЫ

// Событие нажатия клавиши
document.getElementById("Klava").addEventListener("keydown", function(event) {
    console.log("Клавиша нажата", event.key);
});
// Событие отпускания клавиши
document.getElementById("Klava").addEventListener("keyup", function(event) {
    console.log("Клавиша отпущена", event.key);
});
// Событие нажатия клавиши с повтором
document.getElementById("Klava").addEventListener("keypress", function(event) {
    console.log("Клавиша нажатия с повтором", event.key);
});

//СОБЫТИЯ DRAG & DROP

// Начало перетаскивания
document.getElementById("pictures").addEventListener("dragstart", function(event) {
    console.log("Перетаскивание началось", event);
});
// Прокидывание объекта
document.getElementById("pictures").addEventListener("dragover", function(event) {
    event.preventDefault(); // Необходимо для разрешения "drop"
    console.log("Перетаскивание объекта");
});
// Окончание перетаскивания
document.getElementById("pictures").addEventListener("drop", function(event) {
    event.preventDefault();
    console.log("Объект сброшен", event);
});

//СОБЫТИЯ УКАЗАТЕЛЯ

// Событие начала действия с указателем
document.getElementById("ykaz").addEventListener("pointerdown", function(event) {
    console.log("Указатель нажат", event);
});
// Событие перемещения указателя
document.getElementById("ykaz").addEventListener("pointermove", function(event) {
    console.log("Указатель перемещается", event);
});
// Событие отпускания указателя
document.getElementById("ykaz").addEventListener("pointerup", function(event) {
    console.log("Указатель отпущен", event);
});

//СОБЫТИЯ ПОЛОСЫ ПРОКРУТКИ

// Событие прокрутки страницы
window.addEventListener("scroll", function(event) {
    console.log("Страница прокручена", event);
});
// Событие прокрутки внутри элемента
document.getElementById("myElement").addEventListener("scroll", function(event) {
    console.log("Элемент прокручен", event);
});

//СОБЫТИЯ СЕНСОРНЫХ ЭКРАНОВ

// Начало касания
document.getElementById("sensor").addEventListener("touchstart", function(event) {
    console.log("Начало касания", event);
});
// Движение пальца по экрану
document.getElementById("sensor").addEventListener("touchmove", function(event) {
    console.log("Движение пальца", event);
});
// Конец касания
document.getElementById("sensor").addEventListener("touchend", function(event) {
    console.log("Конец касания", event);
});
// Отмена касания
document.getElementById("sensor").addEventListener("touchcancel", function(event) {
    console.log("Отмена касания", event);
});

//СОБЫТИЯ С ТАЙМЕРОМ

// Установка таймера с использованием setTimeout
setTimeout(function() {
    console.log("Таймер сработал через 2 секунды");
}, 2000);
// Установка интервала с использованием setInterval
let interval = setInterval(function() {
    console.log("Интервал срабатывает каждую секунду");
}, 1000);
// Очистка интервала
setTimeout(function() {
    clearInterval(interval);
    console.log("Интервал остановлен");
}, 5000);
