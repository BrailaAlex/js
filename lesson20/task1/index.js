class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
        sayHi() {
            console.log(`Hi, I am ${this.name}`);
        };
        
        requestNewPhoto () {
        
         console.log(`New photo request was sent for ${this.name}`);
        };
        
        setAge(newAge) {
            if (newAge < 0) {
                return false
            };
            this.age = newAge;
            if (newAge >= 25) {
                this.requestNewPhoto();
            }
            return newAge;

    }
    static createEmpty() {
        let new_user = new User('', null)
        return new_user;
    }


    }

const user1 = new User('Tom', 17);
console.log(user1);
console.log(User.createEmpty());


export { User }

