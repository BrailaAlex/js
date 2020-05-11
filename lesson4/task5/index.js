let m = 3;
let n = 9;
let result = 0;
for (let i = m; i <= n; i++) {

    if (i % 2 === 0 && i % 4 !== 0) {
        result += i
    }else if (i % 3 === 0) {
        result -= i
    }
     else if (i % 4 === 0) {
        result *= i

    }
    if (i % 5 === 0) {
        console.log(i)
    }



}














/*let a = 10;
let result = 100;

if (a % 2 === 0 && a % 4 === 0) {
    console.log(a + result)
} else {
    console.log( result -a)


}*/