//const numbers = [1, 2, 3, 4, 5];

const reverseArray = arr =>{
    if (!Array.isArray(arr)) {
        return null;
        }
     const copyArray = arr.slice();
     
     copyArray.reverse();

    return copyArray;
    
}


//let arr = reverseArray(numbers);
//console.log(arr);