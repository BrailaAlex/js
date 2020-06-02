

//algo:
// create user class and repository class.
// in the class User use get to limit modifications 
// in the class UserRepository use (Object.freeze) to block access to array modification
// create the necessary methods(get name, get id, get name by your id)



export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }

}

export class UserRepository {
    constructor(users) {

        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return Object.values(this._users).flat().map(object => object.name);
    }

    getUserIds() {
        return Object.values(this._users).flat().map(object => object.id);
    }

    getUserNameById(num) {
        return this.users.find(user => user.id === num).name;
    }

}

const user_one = new User('22.22.22', 'Joe', '5');
const user_two = new User('33.33.33', 'Tom', '6');

const userRep1 = new UserRepository([user_one, user_two]);

/*console.log(Object.values(userRep1).flat())
userRep1.getUserNames()
userRep1.getUserIds()
userRep1.getUserNameById('22.22.22')



user_one._name = 'Bill';
console.log(user_one);
user_two._name = 'Tad';
console.log(user_two);*/


