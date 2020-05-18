//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sortDesc(arr) {
    const copyArray = arr.slice();

    copyArray.sort((a, b) => b - a);



    return copyArray;

}







//let arr = sortDesc(numbers);
//console.log(arr);