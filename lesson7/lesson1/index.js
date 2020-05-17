const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSpecialNumbers(arr) {

    let specialNum = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            specialNum.push(arr[i]);
        }
    }

    return specialNum;
}


let arr = getSpecialNumbers(numbers);
console.log(arr);