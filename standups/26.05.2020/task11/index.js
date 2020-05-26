//input: object, string;
//output: object;

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;

}

//input: object, string;
//output: object;

function addPropertyV2(userData, userId) {
    let obj = { id: userId };
    return Object.assign(userData, obj);

}

//input: object, string;
//output: object;

function addPropertyV3(userData, userId) {
    let target = {};
    return Object.assign(userData, obj);

}

//input: object, string;
//output: object;

function addPropertyV4(userData, userId) {
    //how to copy object
    //let resObj = {...userData};
    //let resObj = Object.assign{},userData;

    let resObj = { ...userData, id: userId };
    return resObj;

}


let userData = {
    name: "Andrey",
    city: "Lviv",
    age: 20

};

let userId = '1111';

console.log(userData);

console.log(addPropertyV4(userData, userId));

console.log(userData);

//DEMO

//let arr = [1, 5, 6];
//let res = [...arr, 5, 10, 12];
//console.log(res);


