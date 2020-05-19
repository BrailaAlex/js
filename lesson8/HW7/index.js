const obj1 = {
    name: 'Tomas',
    student: true,
};
const obj2 = {
    name: 'Tom',
    student: true,
};

let compareObjects = (obj1, obj2) => {
    const entriesArr1 = Object.entries(obj1).flat();
    const entriesArr2 = Object.entries(obj2).flat();


        return entriesArr1.toString() === entriesArr2.toString();

}

//let obj3 = compareObjects(obj1, obj2);
//console.log(obj3);
