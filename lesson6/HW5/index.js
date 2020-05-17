const numbers = [1, 2, 3, 4, 5];

function reverseArray(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }

    let reverseArr = [];

    for (let i = numbers.lenght - 1; i >= 0; i--) {
        reverseArr.push(numbers[i]);

    }

    return reverseArr;

}












 