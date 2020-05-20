let customers = {
    'customer-id-1': {
        name: 'Tom',
        age: 50,
    },
    'customer-id-2': {
        name: 'Bill',
        age: 19,
    },
    'customer-id-3': {
        name: 'Alex',
        age: 25,
    },
    'customer-id-4': {
        name: 'Alex',
        age: 20,
    },
    'customer-id-5': {
        name: 'Ann',
        age: 29,
    }
};

function getCustomersList(obj) {
     console.log(obj);


    return Object.entries(obj)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((fisrt, second) => fisrt.age - second.age)
}

console.log(getCustomersList(customers));