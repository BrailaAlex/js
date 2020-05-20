//let arr = ['  20.20text', '12px', '21.21.21text', 'seven'];

const getParsedIntegers = arr => {
    return arr.map(el => Number.parseInt(el))

}

const getParsedIntegersV2 = arr => {
    return arr.map(el => parseInt(el))

}

const getParsedFloats = arr => {
    return arr.map(el => Number.parseFloat(el))

}

const getParsedFloatsV2 = arr => {
    return arr.map(el => parseFloat(el))

}





/*let result1 = getParsedIntegers(arr)
console.log(result1);
let result2 = getParsedIntegersV2(arr)
console.log(result2);
let result3 = getParsedFloats(arr)
console.log(result3);
let result4 = getParsedFloatsV2(arr)
console.log(result4);*/
