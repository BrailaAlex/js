


 export function sumOfSquares() {
    return [].reduce.apply(arguments, [(acc, el) => {
        return acc + el * el;
    }, 0]);


}

//console.log(sumOfSquares(2, 2));





