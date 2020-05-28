// input: func;
// output: func;


function saveCalls(memoryFunction) {

    withMemory.calls = [];

    function withMemory(...arguments) {
        withMemory.calls.push(arguments);

        return memoryFunction.apply(this, arguments);
    }
    return withMemory;
};


function test(a, b) {
    return Math.sqrt(a * a + b * b);
};


const testWithMemory = saveCalls(test);

testWithMemory(4, 2, 5, 10, 20, 30);
testWithMemory(9, 1, 6, 12, 14, 18);
testWithMemory('a', 'b', 'c', 'd', 'e', 'f');

console.table(testWithMemory.calls);

const user = {
    name: 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls(user.sayHi);

//console.log(methodWithMemory.apply({ name: 'Tom' }));

//console.log(methodWithMemory.calls);