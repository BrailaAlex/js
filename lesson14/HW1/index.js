// input:number;
// output:number;


let memory = 0;



function add(number) {
    return memory += number;
}

function decrease(number) {
    return memory -= number;
}

function reset(number) {
    return memory = 0;
}

function getMemo() {
    return memory;
}



export { add, decrease, reset, getMemo }