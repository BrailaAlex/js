//1. learn requirements
//2. create step by step algo (& input/output for funtions) 
//3. create prototype solution
//4. testing 
//5. refactoring
//6. final solution 




//input: Object, object;
//output: Boolean;


//algo:
// 1. Compare two objects by length if === return true/false;
// 2. Iterete keys and compare values. If not equal - return false;



let obj1 = {
    age: 20,
    name: 'Andrey',
    city: "Kiev",
    location: "Kiev"

};

let obj2 = {
    age: 20,
    name: 'Denis',
    city: "Kiev",
    location: "Kiev"

};



/*function compareObjects(obj1, obj2) {
    if(acc === false){
        return false;
    }
    

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length)
    return false;

    return keys1.reduce((acc, key, index) => {
        console.log('STEP ' + index);
        let value1 = obj1.key;
        let value2 = obj2.key;

        console.log('value1 ' + value1);
        console.log('value2 ' + value2);
        

        if(value1 !== value2){
            console.log('ACC ' + acc);
            return false;
        }else{
            return true;      
                }
    }, true);


}*/

function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;

    return keys1.reduce((acc, key) => {
        if (acc === false)
           return false;
       return obj1[key]=== obj2[key];
        
    }, true);

}


console.log(compereObjects(obj1, obj2));
