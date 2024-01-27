// Задание 1
console.log(min(4, 8));
console.log(min(6, 6));

function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}


// Задание 2
let n = prompt('Введите число');
console.log(mess(n));

function mess(a) {
    if (a % 2 === 0) {
        return 'Число четное';
    }
    else {
        return 'Число нечетное';
    }
}


// Задание 3.1
let c = prompt('Введите число');

let square = (a) => (a ** 2);
console.log(square(c));


// Задание 3.2
let square1 = (a) => {
    let result = (a ** 2);
    return result;
}

let d = prompt('Введите число');
let h = square1(d);
alert(h);


// Задание 4
function yourAge() {
    let age = Number(prompt('Сколько Вам лет?'));

    if (age < 0) {
        let result = 'Вы ввели неправильное значение'
        return result;
    }
    else if (age > 0 && age <= 12) {
        result = 'Привет, друг!';
        return result;
    }
    else if (age >= 13) {
        result = 'Добро пожаловать!';
        return result;
    }
}

console.log(yourAge());


// Задание 5
console.log(mult());

function mult() {
    let numb1 = prompt('Введите первое число');
    let numb2 = prompt('Введите второе число');

    let isNumb1 = !isNaN(Number(numb1));
    let isNumb2 = !isNaN(Number(numb2));
    if ((isNumb1 === true) && (isNumb2 === true)) {
        let result = numb1 * numb2;
        return result;
    }
    else {
        let result = 'Одно или оба значения не являются числом';
        return result;
    }
}


// Задание 6
console.log(expThree());

function expThree() {
    let n = prompt('Введите число');
    let isNumb = !isNaN(Number(n));

    if (isNumb === true) {
        let cube = n ** 3;
        result = `${n} в кубе равняется ${cube}`;
        return result;
    }
    else {
        let result = 'Переданный параметр не является числом';
        return result;
    }
}


// Задание 7
const circle1 = {
    radius: 10,
    getArea() {
        let result = circle1.radius ** 2 * 3.14159;
        return result;
    },
    getPerimeter() {
        let result = circle1.radius * 2 * 3.14159;
        return result;
    }
}

const circle2 = {
    radius: 15,
    getArea() {
        let result = circle2.radius ** 2 * 3.14159;
        return result;
    },
    getPerimeter() {
        let result = circle2.radius * 2 * 3.14159
        return result;
    }
}

console.log(`Площадь круга 1 равна ${circle1.getArea()}`);
console.log(`Длина окружности 1 равна ${circle1.getPerimeter()}`);

console.log(`Площадь круга 2 равна ${circle2.getArea()}`);
console.log(`Длина окружности 2 равна ${circle2.getPerimeter()}`);