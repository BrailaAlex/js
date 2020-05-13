function sum(from, to) {
    let sumNumber = 0;
    for (let i = from; i <= to; i++) {
        sumNumber += i;

    }
    return sumNumber
}
//console.log(sum(1, 5));

function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;

    } else {
        return false;

    }

}
//compareSums(3, 4, 1, 2)