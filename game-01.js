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