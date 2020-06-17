   
 class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
        sayHi() {
            console.log(`Hi, I am ${this.name}`);
        }
        
        requestNewPhoto () {
        
         console.log(`New photo request was sent for ${this.name}`);
        }
        
        setAge(value) {
            if (value < 0) {
                return false
            };
            this.age = value;
            if (value >= 25) {
                this.requestNewPhoto();
            }
            return value;
        }
    }


//console.log(User.prototype);
//let user1 = new User("Test", 50);
//console.log(user1);
//user1.sayHi();
//user1.setAge(30);

//let user2 = new User("Test222", 50);
//console.log(user2);
//user2.sayHi();

class Sportsmen {
    constructor(name){
        this.name = name;
             
        }
        
    };





class Swimmer{

}    