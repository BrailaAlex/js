
function createCalculator() {

    let memory_calc = 0;

    function add(number) {
        return memory_calc += number;
    }

    function decrease(number) {
        return memory_calc -= number;
    }

    function reset(number) {
        return memory_calc = 0;
    }

    function getMemo() {
        return memory_calc;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }

}
export { createCalculator };