const numbers = [1, 2, 3, 4, 5];

export function arrAverage(arr) {
    if (!Array.isArray(arr)) {
        return null;

    }
    
    return arr.reduce((a, b) => (a + b)) / arr.length;




}




let arr1 = arrAverage(numbers);
console.log(arr1);
