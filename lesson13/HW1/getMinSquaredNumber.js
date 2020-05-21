//input:array
//output: number

//algo
//1 type check
//2 return to the square the el of the array
//3 find square min el by module

//let arr = [1, 2, 3, -5, 10.5, 9]


 export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let el_one = arr.map(el => Math.abs(el * el));

    let el_two = Math.min(...el_one);


    return el_two;


}
//console.log(getMinSquaredNumber(arr));

