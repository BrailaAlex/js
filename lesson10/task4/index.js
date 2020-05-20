//input: arr
//input: max num in arr

const arr = [2, 8, 52, -25, 6, -62, 5.25, 6.24, -5, 28];

const getMaxAbsoluteNumber = arr =>{
    if (!Array.isArray(arr)) {
        return null;
    }
    return Math.max.apply(null, arr);
    


}

//let result = getMaxAbsoluteNumber(arr);
//console.log(result);
