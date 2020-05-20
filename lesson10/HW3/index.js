//input: num;
//output: arr;


//let num = 5.255;
const superRound = num =>
   [
    Math.floor(num),
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num),
    Number(num.toFixed(2)) 

]
  



//console.log(superRound(17.558));
