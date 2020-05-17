//let numbers = [1, 2, 3, 2, 2, 4, 4, 5, 5, 5];

function removeDuplicates(array){
    
    if (!Array.isArray(array)) {

        return null;}
        let result = [];

        for(let num of array){
            if(!result.includes(num)){
                result.push(num)
            }
        }
        
        return result;


}



//let arr1 = removeDuplicates(numbers);
//console.log(arr1);
