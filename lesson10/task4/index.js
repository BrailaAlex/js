//input: arr
//input: max num in arr



let arr = [10, 15, -20, 30, -40, -50, -100];

const getMaxAbsoluteNumber = arr => {
    if ((!Array.isArray(arr)) || (arr.length === 0)) {
         return null 
        };
    const values = arr.map(num => Math.abs(num));

    const maxNum = Math.max(...values);

    return maxNum;

}

//let result = getMaxAbsoluteNumber(arr);
//console.log(result);
