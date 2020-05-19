const numbers = [1, 2, 3, 4, 5];

function arrAverange(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }
    
    return arr.reduce((a, b) => (a + b)) / arr.length;




}




let arr = arrAverange(numbers);
console.log(arr);
