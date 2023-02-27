/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
 */

function showPrimeNum(number) {
    let i = 0;
    const inputError = "Введены ошибочные данные";
    const inputPrimeNum = `Число ${number} - простое число`;
    const inputNotPrimeNum = `Число ${number} - НЕ простое число`;

    if (number > 1000 || number < 0 || number !== "number") {
        return inputError;

    } else if (number === 0 || number === 1) {
        return inputNotPrimeNum;

    } else if (number === 2){
        return inputPrimeNum;

    } else {
        let arrNumbers = Array.apply(null,{length:number+1}).map(Number.call, Number);
        arrNumbers.forEach(function(item, index, array) {
            if (item > 2) {
                if (number % item === 0) {
                    i += 1;
                    return i;
                }
            }
        })
        if (i === 1) {
            return inputPrimeNum;
        } else {
            return inputNotPrimeNum;
        }
    }

}


console.log(showPrimeNum(555));