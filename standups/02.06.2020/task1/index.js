//input:
//output: func counter

//algo
// 1. create function makeCounter
// 2. create a function in a function
// 3. return function counter ++


//LEXICAL ENVIROMENT

/*lexicalEnvironment = {
    environmentRecord: {
      <identifier> : <value>,
      <identifier> : <value>
    }
    outer: < Reference to the parent lexical environment>
  }*/

// interview example
/*let a = 10;
let b = 20;

printer();
sum();

function printer(a) {
    console.log(a);

}
const sum = (a, b) => {
    console.log(a + b);

};*/

//let counter = 0;


function makeCounter() {

    let counter = 10;

    return function () {
        return counter++;
    }

}

let counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

let counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());


