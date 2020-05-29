//input: Object;
//output: aaray;

let user = {
    firstName: 'Bob',
    lastName: 'Marly',

    messageFirstName() {
        return console.log(`Hello ${this.firstName}`);

    },

    messageLastName() {
        return console.log(`Hello ${this.lastName}`);

    },
}

export function getOwnProps(user) {
    let newArr = [];
    for (let property in user) {
        if(user.hasOwnProperty(property) && typeof user[property] !== 'function'){
            newArr.push(property)
        }

    }
    return newArr;
};



//user.messageFirstName();
//user.messageLastName();
//console.log(getOwnProps(user));


