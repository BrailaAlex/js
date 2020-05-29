
export function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {

    return console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
    if (newAge < 0) {
        return false
    };
    this.age = newAge;
    if (newAge >= 25) {
        this.requestNewPhoto();
    }
    return newAge;

};






const user1 = new User('Tom', 15);
const user2 = new User('Bob', 30);

//console.log(user1);
//user1.sayHi();

//console.log(user2);
//user2.sayHi();

//user1.requestNewPhoto();
//user1.setAge(17);
