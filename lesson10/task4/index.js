//input: arr
//input: max num in arr

const arr = [52, -35, 88, -3, 25, 87, 14, -6, -8, -45];

const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || (arr.length == 0)) {
        return null;
    }
    return Math.max.apply(null, arr);



}

let result = getMaxAbsoluteNumber(arr);
console.log(result);
