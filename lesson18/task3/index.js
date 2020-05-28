


export function sumOfSquares() {
    return [].map.apply(arguments, [(el) => {
        return el * el;
    }, 0]);


}

//console.log(sumOfSquares(1, 2, 3, 4));






