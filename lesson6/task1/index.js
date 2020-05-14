const numbers = [25, 66, 55, 22, 44, 77]
function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
        
    }
    return [arr.length, arr[0], arr[arr.length - 1]]

}

arrayBound = getArrayBounds(numbers);

console.log(arrayBound);
