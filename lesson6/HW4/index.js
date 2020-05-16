let numbers = [1, 2, 3, 4, 5];

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const evenNumbers = new Array;
   
    for (let i = 0; i < arr.length; i++) {
        
        if(i % 2 ===0){
            evenNumbers[i] = arr[i];

        }else if(i % 2 !==0){
            evenNumbers[i] = arr[i] + delta;
        }
           
           
     
              
        
    }

    return evenNumbers

}







let arr = increaseEvenEl(numbers, 2);
console.log(arr);

