
//scope exemple:

/*let message = 'Hello';

if(true){
    console.log(message);
    
}
{
    let message = 'Hey';
    console.log(message);
    
}

console.log(message);*/


// hosting example:

/*console.log(sum(5, 6));

function sum(a, b) {
    return a + b;
}

console.log(message);
var message = "Hello three";
console.log(message);

//console.log(message);
//const message = "Hello three";*/


//hosting VAR example 1

var a = 1;
if(true){
    var a = 5;
    console.log(a);
     
}
console.log(a);

//hosting VAR example 2

/*var foo = 1;

function bar() {
    if (foo) {
        console.log(foo);
        console.log(foo);
        var foo = 10;

    }

    return foo;
}
var foo = bar();
console.log(foo);*/

//hosting VAR example 3

var message = 'Hello';

function print(){
    console.log(message);
    var message = 'Hi';
    
    
}

console.log(message);


//scope example

/*let message = 'hello';

if (true) {
    let message = 'Hi';
    console.log(message);

}
console.log(message);*/












