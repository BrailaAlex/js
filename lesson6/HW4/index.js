let numbers = [1, 2, 3, 4, 5];

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let evenNumbers = new Array;
   
    for (let i = 0; i < arr.length; i++) {

         if(i % 2 === 0){
          evenNumbers[i] = arr[i] + delta;
            
        
        }else if(i % 2 !== 0){
            evenNumbers[i] = arr[i];
            
        }
       
        
        
                
        
    }

    return evenNumbers
    console.log(arr);
}







let arr = increaseEvenEl(numbers, 10);
console.log(arr);



