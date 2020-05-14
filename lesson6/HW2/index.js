//let numbers = [1,2,3,4,5];

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }
    let square = new Array;

    for (i in arr) {
        square[i] = Math.pow(arr[i], 2)
    }
    return square;

}


//let arr = squareArray(numbers)
//console.log(arr);
