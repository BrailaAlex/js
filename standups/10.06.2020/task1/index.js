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

//function myBind1(func, context){
    //return func.bind(context);

}

//input: func, obj;
//output: func;

//algo:
// 1. add func into context;
// 2. return func;



function myBind2(func, context){
    // 1. add func into context;
    // 2. call func and return result;
    return function(...args){
        let copyContext = Object.assign({}, context);

        copyContext.tempFunc = func;

        console.log(copyContext);
        //console.log(args);

        return copyContext.tempFunc(...args);
          
    }
    
}
//input: func, obj;
//output: func;
function myBindWithApply(func, context){
    return function (...args){
        let funcResult = func.apply(context, args);
        return funcResult;
    }
}

//test data
let bindedPrintMessage = myBind1(printMessage, user);
bindedPrintMessage(50, 'Kyiv');
