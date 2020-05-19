//const keysList = ['1', '2', '3'];
//const valuesList = ['apple', 'banana', 'pineapple'];

const buildObject = (keysList, valuesList) => {

    let object = {};
    for (let i = 0; i < keysList.length; i++) {
        object[keysList[i]] = valuesList[i];

    }

    return object;
}

//console.log(buildObject(keysList, valuesList));