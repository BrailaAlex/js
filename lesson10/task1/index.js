let arrNumbers = [1, 2, 3, 5.16, 3.12, NaN, 'Bob', 'Sam', 'Ann',]

const getFiniteNumbers = arr => {
    return arr.filter(el => Number.isFinite(el))



}

const getFiniteNumbersV2 = arr => {
    return arr.filter(el => isFinite(el))

}

const getNaN = arr => {
    return arr.filter(el => Number.isNaN(el))


}

const getNaNV2 = arr => {
    return arr.filter(el => isNaN(el))

}

const getIntegers = arr => {
    return arr.filter(el => Number.isInteger(el))

}

//let result = getFiniteNumbers(arrNumbers)
//console.log(result);
