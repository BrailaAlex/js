
let number = 17.5585282;
let n = 2;


const superRound = (number, n) =>
    [
        Math.floor(number * 10 ** n) / 10 ** n,
        Math.round(number * 10 ** n) / 10 ** n,
        Math.ceil(number * 10 ** n) / 10 ** n,
        Math.trunc(number * 10 ** n) / 10 ** n, + number.toFixed(n)


    ]



console.log(superRound(number, n));
