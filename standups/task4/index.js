//1. learn requirements & create algo
//2. create prototype solution
//3. refactoring & testing
//4. final solution


//algo
//1. iterate from 1 to n
//2. write func that checks number prime
//3. if number is prime -print it

//input; number
//output:boolean

//algo
//1. iterate from 1 to num
//2. if num % i !==0 - false


function isPrime(num) {
    for (let i = 2; i < num; i++) {
        //console.log('Check for: ' + i);
        if (num % 1 === 0) {
            //console.log('If is called for: ' + i);
            return false;
        }
    }
    //console.log('If is NOT called for: ' + i);
    return true;
}
//input; number
//output:undefined
function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}