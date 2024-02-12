// Задание 1
let i = 1;
while (i <= 2) {
    console.log("Привет");
    i++;
}

// Задание 2
for (i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
i = 7;
do {
    console.log(i);
    i++;
} while (i <= 22);

// Задание 4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n + ' - число, которое получилось после деления 1000 на 2 ' + num + ' раз.');
console.log('Количество итераций составило ' + num);

// Задание 6
let dateFriday = 2;
do {
    console.log('Сегодня пятница, ' + dateFriday + '-е число. Необходимо поготовить отчет.');
    dateFriday += 7;
} while (dateFriday <= 31);