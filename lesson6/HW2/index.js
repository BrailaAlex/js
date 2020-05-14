//let numbers = [5,2,3,4,5];

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }
    const square = new Array;

    for (let i = 0;i<arr.length; i++) {
        square[i] = Math.pow(arr[i], 2)
    }
    return square;

}


//let arr = squareArray(numbers)
//console.log(arr);
