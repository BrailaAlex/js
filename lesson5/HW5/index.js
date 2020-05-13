
function findDivCount(a, b, n) {
    let amount = 0;
    
    for (let i = a; i <= b; i++)
        if (i % n == 0) {
        amount ++;
           
        }
   return amount;
}