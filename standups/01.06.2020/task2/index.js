//input: array of objects, array;
//output: array of objects;

//algo;
// 1. setting property isAdmin for user
// 2. compare users id to adminIds elements
// 3. if the coincide, add to user object property isAdmin: true
// 4. if there are no coincides, thought isAdmin: false


//How to work on tech tasks. Step by step guide
//1. learn requirements +++
//2. create step by step algo (& input/output for funtions) +++ 
//3. create prototype solution +++
//4. testing +++
//5. refactoring +++
//6. final solution +++

// 1.
function markAdmins(users, adminIds) {
    return users.map(user => {
        let isAdmin = adminIds.includes(user.id);
        return { ...user, isAdmin };

    
     
    });
}
 // 2.

 function markAdmins1(users, adminIds) {
    return users.map(user => ({...user, isAdmin: adminIds.includes(user.id)}));
}





const adminIds = ['1', '3'];
const users = [

    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' },
];


console.log(markAdmins(users, adminIds));
console.log(markAdmins1(users, adminIds));

