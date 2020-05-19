/*const obj = {
'John Doe': 19,
'Tom': 17,
'Bob': 18,
'Sara': 20,
'Nicolas': 17,
'Artur':20,
};*/
const getAdults = obj =>{
    let person = {};
    for(let key in obj){
        if(obj[key] >= 18){
            person[key] = obj[key];
        }
    }
    return person;

}




//let object = getAdults(obj);
//console.log(object);
