// Задание 1
let password = 'пароль';
let message = prompt('Введите пароль');
if (message === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно')
}

// Задание 2
let c = 2;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 3
let d = 15;
let e = 110;
(d > 100 || e > 100) ? alert('Верно') : alert('Неверно');

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Введите номер месяца в диапазоне от 1 до 12');
        break;
}

// Задание 7
let inpNumber = prompt('Пожалуйста, введите любое число');
let isNumber = !isNaN(Number(inpNumber));
if (isNumber != NaN) { (inpNumber % 2 === 0) ? alert('Число четное') : alert('Число нечетное') };

// Задание 8
let clientOS = prompt('Введите версию ОС вашего смартфона: 0 - для iOS, 1 - для Android');
isNumber = !isNaN(Number(clientOS));
if (isNumber != NaN) {
    switch (Number(clientOS)) {
        case 0:
            console.log('Установите версию приложения для iOS по ссылке');
            break;
        case 1:
            console.log('Установите версию приложения для Android по ссылке');
            break;
        default:
            console.log('Введите версию ОС корректно: 0 или 1');
            break;
    }
} else {
    console.log('Вы ввели не число');
}

// Задание 8
clientOS = prompt('Введите версию ОС вашего смартфона: 0 - для iOS, 1 - для Android');
let clientDeviceYear = prompt('Введите год выпуска вашего смартфона');
isNumber = !isNaN(Number(clientOS));
if (isNumber != NaN) {
    clientOS = Number(clientOS);
    clientDeviceYear = Number(clientDeviceYear);
    if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
        message = 'Установите версию приложения для iOS по ссылке';
    }
    if ((clientOS === 0) && (clientDeviceYear < 2015)) {
        message = 'Установите облегченную версию приложения для iOS по ссылке';
    }
    if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
        message = 'Установите версию приложения для Android по ссылке';
    }
    if ((clientOS === 1) && (clientDeviceYear < 2015)) {
        message = 'Установите облегченную версию приложения для Android по ссылке';
    }
} else {
    message = 'Вы не ввели версию ОС вашего смартфона';
}
console.log(message);