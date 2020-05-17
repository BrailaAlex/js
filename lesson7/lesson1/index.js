let numbers = [1, 2, 3, 4, 5, 6];


function getSpecialNumbers(arr) {

    let specialNumbers = [];


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            specialNumbers.push(numbers[i]);

        }
    }
    return specialNumbers;

}



let arr = getSpecialNumbers(numbers);
console.log(arr);