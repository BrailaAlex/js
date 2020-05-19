const obj = {
    name: 'Ann',
};
 //key = 'object';
 //value = 'physics';


const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};


const addPropertyV2 = (obj, key, value) => {
    let block= {
        [key]: value,
    };

    return Object.assign(obj,block);
}


const addPropertyV3 = (obj, key, value) => {
    let block = {
        [key]: value,
    };

    let objCopy = Object.assign({}, obj, block);
    return objCopy;
};

const addPropertyV4 = (obj, key, value) => {

    let obj_copy = {
        [key]: value
    };

    return Object.assign({...obj }, obj_copy);

};
const result = addPropertyV4(obj, 'history', 'world_history');

console.log(result);