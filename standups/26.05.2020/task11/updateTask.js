//input: object, object;
//output: object;

function margeObjectV1(obj1, obj2) {
      return Object.assign(obj1, obj2);

}

//input: object, object;
//output: object;

function margeObjectV2(obj1, obj2) {
    return Object.assign(obj2, obj1);

}

//input: object, object;
//output: object;

function margeObjectV3(obj1, obj2) {
    let = resObj = {...obj1, ...obj2};
    return resObj;

}

//input: object, object;
//output: object;

function margeObjectV4(obj1, obj2) {
    let = resObj = {...obj2, ...obj1};
    return resObj;

}


let userData = {
    phone: "Andrey",
    city: "093444444",
    age: 20111

};

let userData = {
    name: "Denis",
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

