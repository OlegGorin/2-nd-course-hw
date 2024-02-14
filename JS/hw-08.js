// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}));



// Задание 2
function isPositive(number) {
    return number > 0;
}
function isMale(obj) {
    return obj['gender'] === 'male';
}
function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));



// Задание 3
const timer = (deadline) => {

    const interval = setInterval(() => {
        currentDate = new Date();
        console.log(currentDate);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошли')
    }, deadline * 1000)
};

let currentDate = new Date();
timer(30);



// Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        if (callback) { callback(); }
    }, 1000)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})



// Задание 5
function delayForSeconds(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSeconds(function () {
    sayHi('Глеб')
})