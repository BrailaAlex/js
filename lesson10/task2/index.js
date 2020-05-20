let arr = ['  20.20text', '12px', '21.21.21text', 'seven'];

const getParsedIntegers = arr => {
    return arr.filter(el => Number.parseInt(el))

}

const getParsedIntegersV2 = arr => {
    return arr.filter(el => parseInt(el))

}

const getParsedFloats = arr => {
    return arr.filter(el => Number.parseFloat(el))

}

const getParsedFloatsV2 = arr => {
    return arr.filter(el => parseFloat(el))

}





//let result = getParsedIntegers(arr)
//console.log(result);