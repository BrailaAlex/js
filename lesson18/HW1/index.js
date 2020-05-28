// input: func;
// output: func;


export function saveCalls(memoryFunction) {

    withMemory.calls = [];

    function withMemory(...argums) {
        withMemory.calls.push(argums);

        return memoryFunction.call(this, arguments);
    }



    return withMemory;
};


function test(a, b) {
    return Math.sqrt(a * a + b * b);
};
const testWithMemory = saveCalls(test);
testWithMemory(32, 7, 9, 15, 45, 47, 47);
testWithMemory(4, 15, 16, 17, 18);
testWithMemory('a', 'b', 'c', 'd', 'f');

console.table(testWithMemory.calls);

const user = {
    name: 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls(user.sayHi);
console.log(methodWithMemory.apply({ name: 'Tom' }));
console.log(methodWithMemory.calls) 