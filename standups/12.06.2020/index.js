function positiveSum(arr) {

    return arr.reduce((acc, current) => {
        if (current < 0) {
            return
        } else {
           return acc +current;
        }

    }, 0);
    
}

//1. learn requirements
//2. create step by step algo (& input/output for funtions) 
//3. create prototype solution
//4. testing 
//5. refactoring
//6. final solution 