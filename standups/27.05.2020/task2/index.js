//input: Object, object;
//output: Boolean;

//algo:
// 1. create a function that takes two objects;
// 2. convert object to array/string;
// 3. compare arrays;
// 4. return boolean;


const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    age: 17,
    time: 25
};



function compereObjects(obj1, obj2) {

    if (obj1[propName].valueOf() === obj2[propName].valueOf()) {
        if (!deepEqual(obj1[propName], obj2[propName])) { 
            return false;
        }else true

    
 
}
}


//return obj1;
//return JSON.stringify(obj1) === JSON.stringify(obj2);


//console.log(compereObjects());
//console.log(obj1);
//console.log(obj2);


