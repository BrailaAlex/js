//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function swap(arr) {
    const [start, ...rest] = arr;

    return [...rest, start]

}
//console.log(swap(numbers));
