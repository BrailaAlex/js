const text = 'abcdifjiklmnprstuf';
let num = 5;

const splitString = (text, n = 10) => {

    if (typeof text !== 'string') {
        return null;
    }
    let newArray = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, n);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < n) {
            chunk = chunk + '.'.repeat(n - chunk.length);
        };
        newArray.push(chunk);
        startPosition += n;
    }
    return newArray;
}
console.log(splitString(text, num));