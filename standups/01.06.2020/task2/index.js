//input: object;
//output: array of objects;

//algo;
// 1. convert the object to an array of arrays +++
// 2. map entrias to the array obj +++
// 3. sort the array and return +++

//How to work on tech tasks. Step by step guide
//1. learn requirements +++
//2. create step by step algo (& input/output for funtions) +++ 
//3. create prototype solution +++
//4. testing +++
//5. refactoring +++
//6. final solution +++


function getCustomersList(obj) {
        /*entries.map(entry =>{
        let id = entry[0];
        let object = entry[1];
        console.log(id);
        console.log(object);

        let res = {...object, id, };

        console.log(res);
                
    });*/
    return Object.entries(obj)
        .map(({ id, object }) => ({ ...object, id }))
        .sort((a, b) => a.age - b.age);




}
//test obj
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

console.log(getCustomersList(customers));
