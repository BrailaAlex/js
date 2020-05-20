
let arr = ['1.9', '16.4', '17', '1 dollar']


const cleanTransactionsList = arr =>{
    let newArr = [];
    newArr.push(arr.map(el => Number(el)).filter(Boolean));
    
    let result = newArr.flat().map(el => '$' + el.toFixed(2));

    return result;


}



console.log(cleanTransactionsList(arr));
