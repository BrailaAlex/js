// method reduce => goes through the array performs operations
//FOR COUNTING
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function multiplay(arr) {
    return arr.reduce((acc, el) => acc * el);


}
console.log(multiplay(arr));

//method map
//FOR TRANSFORMATIONS
let person = [
    { name: 'Alex', age: 25, budget: 20000 },
    { name: 'Ann', age: 29, budget: 28000 },
    { name: 'Ban', age: 35, budget: 68000 },
    { name: 'Bill', age: 40, budget: 50000 },
    { name: 'Elli', age: 21, budget: 60000 },
]

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function doubleArr(arr) {
    let newArr = arr2.map(el => el * 100)
    return newArr;
}
console.log(doubleArr(arr2));

//method filter
//FOR FILTER OUT

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(arr) {
    let newArr1 = arr.filter(function (el) {
        if (el % 2 == 0) {
            return true;

        }
    })
    return newArr1
}


console.log(evenNumbers(arr3));





