/* Написать функцию, которая принимает число как аргумент
и возвращает функцию, которая также принимает число как аргумент
и возвращает сумму этих двух чисел. 
Выведите в консоль результат.
 */

function sumTwoNumber(numberOne) {

    return function inputNumber(numberTwo) {
        return console.log(numberOne + numberTwo);
    }
}

const sumResult = sumTwoNumber(5);
sumResult(8);