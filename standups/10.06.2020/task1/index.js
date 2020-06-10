function printMessage(age, city){
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
    
}
let user = {
    name: "Alex",
    email: 'gmail.com'
}

//let bindedPrintMessage = printMessage.bind(user);
//bindedPrintMessage(50, 'Kiev');

//input: func, obj;
//output: func;

function myBind1(func, context){
    return func.bind(context);

}
//test data
let bindedPrintMessage = myBind1(printMessage, user);
bindedPrintMessage(50, 'Kiev')

//input: func, obj;
//output: func;
function myBind2(func, context){
    //TODO implement it
}

//test data
let bindedPrintMessage = my
