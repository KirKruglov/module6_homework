/* Напишите функцию, которая принимает два числа.
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. 
Используйте setInterval.
 */

function showNumber(numberOne, numberTwo) {
    const intervalId = setInterval (func, 1000, numberOne, numberTwo);
    
    function func (numberOne, numberTwo) {
        for (i = numberOne; i < numberTwo + 1; i++) {
            console.log (i);
            clearInterval(intervalId);
        }
    }
} 

showNumber(3, 9);