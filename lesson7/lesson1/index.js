//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getSpecialNumbers = numbers => {

    let SpecialNumbers = [];

    function checkIfSpecialNumber(num) {
        if (num % 3 === 0) {
            SpecialNumbers.push(num);
        }
    }
    numbers.forEach(checkIfSpecialNumber);
    return SpecialNumbers;
}



//let arr = getSpecialNumbers(numbers);
//console.log(arr);