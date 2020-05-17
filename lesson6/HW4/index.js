const numbers = [1, 2, 3, 4, 5];

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let evenNumbers = [];
   
    for (let i = 0; i < arr.length - 1; i++) {

         if(numbers % 2 === 0){
          evenNumbers.push(numbers[i] + delta);
                   
        }
        if(numbers[i] % 2 === 1){
            evenNumbers.push(numbers[i]);
            
        }
       
        
        
                
        
    }

    return evenNumbers;
   
}







let arr = increaseEvenEl(numbers, 10);
console.log(arr);



