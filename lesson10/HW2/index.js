
let lengthArr = 10;
let start = -2;
let finish = 5


function getRandomNumbers(lengthArr, start, finish) {
    if (Math.abs(start - finish) < 1) {
        return null
    }
    const outArr = [];
    start = Math.ceil(start);
    finish = Math.floor(finish);

    for (let i = 0; i < lengthArr; i++) {
        outArr.push(Math.floor(Math.random() * (finish + start) + start));
    }
    return outArr;
}

//let result = getRandomNumbers(lengthArr, start, finish);
//console.log(result);
