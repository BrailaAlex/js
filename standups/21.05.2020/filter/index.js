//input: array, function
//output: array


//algo:
//1 create array
//2 iterate array
//3 if callback condition is ok - add to array, if not - skip
//4


function filterArrayElements(arr, callback) {
    let filtered = [];

    for (let i = 0; i < arr.length; i++) {

        let res = callback(arr[i], i, arr);

        if (res) {
            filtered.push(arr[i]);
        }

    }
    return filtered;

}


const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
let callback = (el) => el % 2 === 0;

let res = filterArrayElements(numbers, callback);
console.log(res);

