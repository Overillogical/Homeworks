/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(array,element) {
    for (let i = 0;i<array.length;i++){
        if (array[i] === element){
            return true;
        }

    }
    return false;
}
function findUniqueElements(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!includesElement(newArray, array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(findUniqueElements([1,2,3,3,3]))

