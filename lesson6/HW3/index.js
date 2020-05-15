//let numbers = [5, 2, 3, 4, 5, 100];

function checkSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null;

    }
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];


    }
    if(sum > 100){
        return true
    }else{
        return false
    }


}


//let arr = checkSum(numbers);
//console.log(arr);

