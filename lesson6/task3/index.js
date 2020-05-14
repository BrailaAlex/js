function getSpecialNumbers(m, n) {
    let multipleNumbers = [];
    for (let i = m; i <= n; i++) {
        if (i % 3 ===  0) {
            multipleNumbers.push(i);
        }
    }

    return multipleNumbers;


}



//const specialNumbers = getSpecialNumbers(10, 30);
//console.log(specialNumbers);
