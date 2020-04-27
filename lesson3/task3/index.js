/* сравнение чисел */

const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;
console.log("a > b: ", true);
console.log("a <= b: ", false);
console.log("a == b: ", false);
console.log("a != b: ", true);


/* сравнение строк */

'a' < 'b';
'ab' > 'a';
console.log("'a' < 'b': ", true);
console.log("'ab' > 'a': ", true);

/* строгое сравнение */

17 === 1;
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0
console.log("17 === 1: ", false);
console.log("17 === 17: ", true);
console.log("17 === '17': ", false);
console.log("17 === true: ", false);
console.log("'0' === '': ", false);
console.log("true === false: ", false);
console.log("true === true: ", true);
console.log("null === undefined: ", false);
console.log("false === 0: ",false);


/* нестрогое сравнение */

17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;

console.log("17 == '17': ", true);
console.log("'0' == '': ", false);
console.log("0 == '': ", true);
console.log("null == undefined: ", true);
console.log("false == 0: ", true);


/* осторожно c null и undefined */

undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;

console.log("undefined == null: ", true);
console.log("undefined == 0: ", false);
console.log("null == 0: ", false);
console.log("undefined < 0: ", false);
console.log("undefined > 0: ", false);