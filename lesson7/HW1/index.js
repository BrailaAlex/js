//const numbers = [1, 2, 3, 4, 5];

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }
    const square = arr.map(x => x * x);



    return square;
}



















//let arr = squareArray(numbers);
//console.log(arr);