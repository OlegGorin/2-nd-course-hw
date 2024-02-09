// Задание 1
let string = 'js'
alert(string.toUpperCase(string));


// Задание 2
const arr2_1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const arr2_2 = ['яблоко', 'груша', 'гриб', 'огурец'];
const arr2_3 = ['Дом', 'Банк', 'Больница', 'Театр'];
const str2_1 = 'Ко';
const str2_2 = 'гру';
const str2_3 = 'Кино';
alert(searchStart(arr2_1, str2_1));
alert(searchStart(arr2_2, str2_2));
alert(searchStart(arr2_3, str2_3));

function searchStart(array, string) {
    let result = [];
    let strLowCase = string.toLowerCase();
    let regexp = new RegExp(`${strLowCase}`);
    array.forEach((el) => {
        if (regexp.test(el.toLowerCase())) {
            result.push(el.toLowerCase());
        }
    });
    return result;
}


// Задание 3
let a = 32.5884;
alert(Math.floor(a));
alert(Math.ceil(a));
alert(Math.round(a));


// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


// Задание 5
function getRandomInt() {
    const minRand = 1;
    const maxRand = 10;
    return Math.round(Math.random() * (maxRand - minRand)) + minRand;
}
console.log(getRandomInt());


// Задание 6
const array = [];
alert(getRandomArrNumbers(Number(prompt('Ведите целое положительное число'))));

function getRandomArrNumbers(n) {
    const minRand = 0;
    const maxRand = n;
    let i = 0;
    let elemArr = 0;
    while (i < Math.floor(n / 2)) {
        elemArr = Math.round(Math.random() * (maxRand - minRand)) + minRand;
        array[i] = elemArr;
        i++;
    }
    return array;
}


// Задание 7
let numb1 = Number(prompt('Ведите первое положительное число'));
let numb2 = Number(prompt('Ведите второе положительное число'));
alert(getRandInt(numb1, numb2));

function getRandInt(a, b) {
    let minRand = a;
    let maxRand = b;
    if (a > b) {
        minRand = b;
        maxRand = a;
    }
    return Math.round(Math.random() * (maxRand - minRand)) + minRand;
}


// Задание 8
let dateNow = new Date();
alert(dateNow);


// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
alert(currentDate);


// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let dateInMilliSeconds = Date.now();
let myDate = new Date(dateInMilliSeconds);
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);