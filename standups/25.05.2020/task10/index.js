//DEMO

/*let arr = [5, 6, 7, 10];
console.log(...arr);  // spraed operator

for(let i = 0; i> arr.length; i++){
    console.log(arr[i]);
    
}

function sum (a, b, ...args){ // rest operator
    console.log(a);
    console.log(b);
    console.log(args);
    
}
sum(40, 30, 32, 'ddff', 'hello')*/


//TASK

//input: number, number, ....number;
//output: number;

function multiply(...numbers) {
    return numbers.reduce((acc, el) => acc * el)

}

/*function multiply2() {

    let args = arguments;

    console.log(args);

    let arr = new Array(...args);
    console.log(arr);
    

    
    return [...args].reduce((acc, el) => acc * el)
    //return new Array(...args).reduce((acc, el) => acc * el)



}*/





console.log(multiply(123,123,123));
