//let numbers = [11, 21, 3, 41, 5000];



function checker(arr) {

    if (!Array.isArray(arr)) {
        return null;
    }
    let minElement = Math.min.apply(null, arr);
    let maxElement = Math.max.apply(null, arr);

    if(minElement+maxElement > 1000){
        return true
    }else{
        return false
    }

   
    }



    














//let arr = checker(numbers);
//console.log(arr);