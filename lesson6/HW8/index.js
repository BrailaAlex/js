//let numbers = [4, 5, 1, 2, 3];

function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    array.sort((a, b) => a - b)
    return array;


}


function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    array.sort((a, b) => b - a)
    return array;

}




//let num1 = sortAsc(numbers);
//console.log(num1);

 //let num2 = sortDesc(numbers);
//console.log(num2);









