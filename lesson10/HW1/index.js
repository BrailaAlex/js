

//let arr =[17.159, 18.2566, 19.888]

const getTotalPrice = arr =>{
    let sumNumber = arr.reduce((sumNumber, current) => sumNumber + current);
    let newArray = Math.floor(sumNumber * 100) / 100;
    return '$' + newArray;

}


//let result = getTotalPrice(arr);
//console.log(result);
