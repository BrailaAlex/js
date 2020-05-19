const userData = {
    name: 'Sam',
};

const addPropertyV1 = (userData, userld) => {
    userData.id = userld;
    return userData;

};

const addPropertyV2 = (userData, userld) => {
    const key = { id: userld };
    return Object.assign(userData, key)

};

const addPropertyV3 = (userData, userld) => {
    const key = { id: userld };
    let userData_copy = Object.assign({}, userData, key)
    return userData_copy;

};

const addPropertyV4 = (userData, userld) => {
    let userData_copy = { id: userld };
    return Object.assign({ ...userData }, userData_copy)

};
const result = addPropertyV4(userData, '123456');

console.log(result);
