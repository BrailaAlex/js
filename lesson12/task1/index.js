//'1 + 2' => '1 + 2 = 3'
const calc = expression => {
    const a = expression.split(' ');
   let result;

    switch(a[1]) {
        case '+':
            result = Number(a[0]) + +a[2];
            break;
        case '-':
            result =  a[0] - a[1];
            break;
    }
    return expression + " = " + result;
}


console.log(calc('1 + 2'));
 