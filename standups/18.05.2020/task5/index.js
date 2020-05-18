
let numbers = [1, 2, 3, 4, 5];
//input: array of numbers
//output: array of numbers

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }
    //1 good
    let res = [];
    //let newArr = [...arr];
    for (let el of arr) {
        //1

        // res[i] = arr[i] * arr[i];

        //2
        res.push(el * el);

        //not good
        //Mach.pow(arr[i], 2)
    }
    return res;

}


function squareArray2(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }

    let res = [...arr];

    for (let i = 0; i < arr.length; i++) {

        res[i] * arr[i] * arr[i];
    }
    return res;

}







let arr = squareArray(numbers)
console.log(arr);