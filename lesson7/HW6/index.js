//const numbers = [1, 2, 3, 4, 5];

const sum = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
     return arr.reduce((a, b) => a + b);


}





//let arr = sum(numbers);
//console.log(arr);