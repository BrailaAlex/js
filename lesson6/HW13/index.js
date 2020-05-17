//let numbers = [1, 2, 3, 2, 2, 4, 4, 5, 5, 5];

function uniqueCount(arr) {
    if (!Array.isArray(arr)) {

        return null;
    }

    for (let i = 0; i < arr.length; i++) {
         for(let j = i + 1; j <= arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(j, 1)
        }


        }
        return arr.length;

    
   }

}



//let arr1 = uniqueCount(numbers);
//console.log(arr1);
