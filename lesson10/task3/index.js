//let number = 25.256515255;

const multiRound = number =>[
Math.floor(number * 100) / 100,
Math.round(number * 100) / 100,
Math.ceil(number * 100) / 100,
Math.trunc(number * 100) /100, + number.toFixed(2)
       
]





//let result = multiRound(number);
//console.log(result);
