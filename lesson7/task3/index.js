//const numbers = [1, [2, 3, 4], 5, [6]];

const flatArray = arr => {
    const flatArray = arr
    .reduce((acc, elem) => {
        return acc.concat(elem);
    }, []);
    return flatArray;
};

















//let arr = flatArray(numbers);
//console.log(arr);