let numbers = [1, 2, 3, 4, 5];

function increaseEvenEl(arr, delta) {

    const evenNumbers = new Array;

    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        
            evenNumbers[i] = Math.pow(arr[i], delta)

        
        
            
        

    }

    return evenNumbers






}





let arr = increaseEvenEl(numbers, 2);
console.log(arr);

