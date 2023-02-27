/* 
Дан массив. 
Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
Jформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
 */

let arr = [1,2,3,4,0,"test"];

function getSumSpecificNum () {
    let arrEvenNumber = 0;
    let arrOddNumber = 0;
    let arrNulNumber = 0;

    arr.forEach(function(item,index,array) {
          if (typeof(item) === "number") {
              if (item != 0) {
                    if (item % 2 === 0) {
                        arrEvenNumber += 1;
                        return arrEvenNumber;
                    } else {
                        arrOddNumber += 1;
                        return arrOddNumber;
                    }
                } else {
                    arrNulNumber += 1;
                    return arrNulNumber;
                }
            }
    })
    console.log(`Количество четных чисел - ${arrEvenNumber}`);
    console.log(`Количество нечетных чисел - ${arrOddNumber}`);
    console.log(`Количество нулей -${arrNulNumber}`);
}

getSumSpecificNum (arr);