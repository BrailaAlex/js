
function findDivCount(a, b, n) {
    let amount = 0;
    for (let i = a; i <= b; i++)
        if (i % n == 0) {
        amount += i ;
            console.log(amount);
        }
return amount;
}
//findDivCount(2,4,2)