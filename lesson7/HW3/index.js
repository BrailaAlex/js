//const numbers = [1, 2, 3, 4, 5];

const increaseEvenEll = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let evenNumber = arr.map((even) => {
        if (even % 2 === 0){
            return even + delta;
        }
        return even;
    }

    )
    return evenNumber;

}



//let arr = increaseEvenEll(numbers, 10);
//console.log(arr);