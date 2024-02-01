// Задание 1
let val = 10;
const task_1 = [1, 5, 4, 10, 0, 3];
for (let count = 0; count < task_1.length - 1; count++) {
   if (task_1[count] != val) {
      console.log(task_1[count]);
   }
   else {
      break;
   }
}


// Задание 2
let arr = [1, 5, 4, 10, 0, 3];
let arrStr = arr.join();
let arr2 = arrStr.split(',');
let result = arr2.indexOf('4');
console.log(result);


// Задание 3
const array = [1, 3, 5, 10, 20];
const arrayStr = array.join(' ');
console.log(arrayStr);


// Задание 4
let arr_3 = [];
let arr_1;
for (let i = 0; i <= 2; i++) {
   arr_1 = [];
   for (let j = 0; j <= 2; j++) {
      arr_1.push(1);
      if (j == 2) {
	  arr_3.push(arr_1);
      }
   }
}
console.log(arr_3);


// Задание 5
let task_5 = [1, 1, 1];
for (let i = 1; i <= 3; i++) {
   task_5.push(2);
}
console.log(task_5);


// Задание 6
let task_6 = [9, 8, 7, 'a', 6, 5];
let task_6Sort = task_6.sort();
if (task_6Sort.includes('a') && task_6Sort.indexOf('a') == task_6Sort.length - 1) {
   let delElement = task_6Sort.pop();
   console.log(task_6Sort);
}


// Задание 7
const task_7 = [9, 8, 7, 6, 5];
let ans = Number(prompt('Угадай число'));
if (task_7.includes(ans)) {
   alert('Угадал');
}
else {
   alert('Не угадал');
}


// Задание 8
let string = 'abcdef';
let task_8 = string.split('')
task_8.reverse();
let task_8End = task_8.join('');
console.log(task_8End);


// Задание 9
let task_9 = [[1, 2, 3,],[4, 5, 6]];
let task_9Str = task_9.join();
let task_9End = task_9Str.split(',');
let task_9Num = [];
for (let i = 0; i < task_9End.length; i++) {
    task_9Num.push(Number(task_9End[i]));
}
console.log(task_9Num);


// Задание 10
const task_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < task_10.length-1; i++) {
    console.log(task_10[i]+task_10[i+1]);
}


// Задание 11
const arrFirst = [2, 5, 3, 6, 4, 7, 1, 8, 9, 10];
let arrSquare = square(arrFirst);
console.log(arrSquare);

function square(arr) {
    const result = arr.map(el => el ** 2);
    return result;
}


// Задание 12
getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

function getLengthWords(array) {
    let element = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        element = array[i].length;
        console.log(element);
        result.push(element);
    }
    console.log(result);
}

// Задание 13
function filterPositive(array) {
    const result = array.filter(el => el < 0);
    console.log(result);
}
  
filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]