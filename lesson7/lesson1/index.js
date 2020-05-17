//let numbers = [1, 2, 3, 4, 5, 6];


function getSpecialNumbers(arr) {

    let specialNumbers = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            specialNumbers.push(arr[i]);

        }
    }
    return specialNumbers;

}



//let arr = getSpecialNumbers(numbers);
//console.log(arr);