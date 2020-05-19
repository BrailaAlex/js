const obj1 = {
    name: 'Sam',
    student: false,

};
const obj2 = {
    name: 'Michael',
    age: 50,
};




const mergeObjectsV1 = (obj1, obj2) => {
    let new_obj = Object.assign({}, obj1, obj2);
    return new_obj;

};

const mergeObjectsV2 = (obj1, obj2) => {
    let new_obj = Object.assign({}, obj2, obj1);
    return new_obj;


};

const mergeObjectsV3 = (obj1, obj2) => {
    let new_obj = Object.assign({ ...obj1 }, { ...obj2 })
    return new_obj;

}

const mergeObjectsV4 = (obj1, obj2) => {
    let new_obj = Object.assign({ ...obj2 }, { ...obj1 })
    return new_obj;

};


const result = mergeObjectsV4(obj1, obj2);
console.log(result);