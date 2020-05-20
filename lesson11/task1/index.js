const text = 'abcdhjjvivkvjnvnhkvgvgbigbij';
let num = 10;

const splitString = (text, n = 10) => {
    if (typeof text !== 'string') {
        return null;
    }
    let newArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, n);

        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < n) {
            chunk = chunk + '.'.repeat(n - chunk.length);
        };

        newArr.push(chunk);
        startPosition += n;
    }
    return newArr;
}
//console.log(splitString(text, num));