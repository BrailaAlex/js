
//const arr = ['name', 'student'];
//const object = {
    //name: 'John Doe',
    //student: true,
    //age: 17,
//};

const pickProps = (object, arr) => {

    let new_object = {};
    for (let key in object) {
        for (let j of arr) {
            if (j === key) {
                new_object[key] = object[key];
            }
        }

    }
    return new_object;
}
//const obj1 = pickProps(object, arr)
//console.log(obj1);
