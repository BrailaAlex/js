function sum(from, to) {
    let sumab = 0;
    for (let i = from; i <= to; i++) {
        sumab += i;

    }
    return sumab
}
//console.log(sum(1, 5));

function compareSum(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return console.log(true);

    } else {
        return console.log(false);

    }

}
//compareSum(3, 4, 1, 2)