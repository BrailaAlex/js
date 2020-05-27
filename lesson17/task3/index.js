
 export function defer(func, time) {

    return function () {
        setTimeout(() => func.apply(this, arguments), time);
    }
}
const user = {
    name: 'Jean-Claude',
    sayHi() {
        console.log(`Hello, I am ${this.name}!`)
    }
}


const hi = defer(user.sayHi, 3000);

hi.call({ name: 'Bruce Willis' })

const sayHi = () => {
    console.log('Hello');
}