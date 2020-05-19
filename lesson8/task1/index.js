//const arr = [1, 'text'];



const transformToObject= arr =>{
    let obj ={};

    arr.forEach(el => {
        obj[el] = el;
        
    });

    return obj; 

}








//let arr1 = transformToObject(arr);
//console.log(arr1);
