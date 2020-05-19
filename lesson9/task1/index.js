/*const obj = {
'John Doe': 19,
'Tom': 17,
'Bob': 18,
'Sara': 20,
'Nicolas': 17,
'Artur':20,
};*/
const getAdults = usersObj => {

    const users = Object.entries(usersObj);

    const filteredUsersArray = users
        .filter(user => user[1] >= 18);

    const names = filteredUsersArray
        .map(user => user[0]);

    return names;
}

//let object = getAdults(obj);
//console.log(object);