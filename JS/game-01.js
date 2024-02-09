function season() {
   let monthNumber = prompt('Введите номер месяца');
   let isNumb = !isNaN(Number(monthNumber));

   if (isNumb === true) {

      if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
         return 'Зима';
      }
      else if (monthNumber >= 3 && monthNumber <= 5) {
         return 'Весна';
      }
      else if (monthNumber >= 6 && monthNumber <= 8) {
         return 'Лето';
      }
      else if (monthNumber >= 9 && monthNumber <= 11) {
         return 'Осень';
      }
      else if (monthNumber < 1 || monthNumber > 12) {
         return 'Вы ввели неверный номер месяца';
      }
   }
   else {
      return 'Введенный параметр не является числом';
   }
}

function remember() {
   let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
   array = array.sort(() => Math.random() - 0.5);
   alert('В следующем окне будет выведен список фруктов. Запомните их последовательность');
   alert(array);
   let answer1 = false;
   let answer2 = false;
   let firstElement = prompt('Чему равнялся первый элемент массива?');
   let finalElement = prompt('Чему равнялся последний элемент массива?');

   if (firstElement.toLowerCase() == array[0].toLowerCase()) {
      answer1 = true;
   }
   if (finalElement == array[array.length - 1]) {
      answer2 = true;
   }

   if (answer1 && answer2) {
      return 'Поздравляю! Вы угадали оба элемента';
   }
   else if (answer1 || answer2) {
      return 'Вы были близки к победе!';
   }
   else {
      return 'Вы ответили неверно!';
   }
}