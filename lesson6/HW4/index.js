//let numbers = [1, 2, 3, 4, 5];

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const evenNumbers = new Array;
   
    for (let i = 0; i < arr.length; i++) {
        
            evenNumbers[i] = arr[i] + delta;
              
     
              
        
    }

    return evenNumbers

}







//let arr = increaseEvenEl(numbers, 10);
//console.log(arr);

