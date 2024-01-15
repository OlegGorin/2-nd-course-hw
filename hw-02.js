//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let ybirthIphone = 2007;
alert(ybirthIphone);

//Задание 3
let creatorJavascript = "Brendan Eich";
alert(creatorJavascript);

//Задание 4
let c = 10;
let d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);

//Задание 5
let result = 2 ** 5;
alert(result);

//Задание 6
a = 9;
b = 2;
alert(a % b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9.0
let user = {
    name: "Peter",
    age: 35,
    isAdmin: true
}

//Задание 9.1
user.cityofResidence = "London";

//Задание 9.2
user['age'] = 30;

//Задание 9.3
delete user["cityofResidence"];

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);
// info = prompt("Какую информацию хотите узнать о пользователе?", "age");
// alert(user[info]);
// info = prompt("Какую информацию хотите узнать о пользователе?", "isAdmin");
// alert(user[info]);

//Задание 10
let yourName = prompt("Ваше имя?");
alert("Привет, " + yourName + "!");