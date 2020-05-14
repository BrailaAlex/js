//let arr = [1, 2, 3, 4, 5];
let sum = 0;

function getSum(arr){
    if (!Array.isArray(arr)) {
        return null; 
        
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        

}
    return sum;
   

    }
    
    
    
    //arrSum = getSum(arr);
    //console.log(arrSum);
    