// Унарный плюс приводит операнд к числу
+17;
+'77';
console.log("+17: ", 17);
console.log("+'77': ", 77);

// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
'some' + 'text';
console.log("10 + '5': ", "105");
console.log("'some' + 'text': ", 'sometext');


// Математические операции с undefined возвращают NaN
undefined + 1;
null + 8;
undefined + '5';
7 - null;
5 - undefined;
'text' + null;
let num = 17;
console.log("undefined + 1: ", NaN);
console.log("null + 8:", 8);
console.log("undefined +'5': ", undefined + '5');
console.log("7 - null: ", 7);
console.log("5 - undefined: ",NaN);
console.log("'text' + null: ", "textnull");

// Постфиксная и префиксная форма записи
++num;
num++;
console.log("++num: ", 18);
console.log("num++: ", 18);


// математические операторы приводят операнды к числам
const a = 17;
const b = -a;
'24' / 4;
18 * '3';
'9' - '3';
'seventeen' / 3;
4 * 'four';
17 / 0;

10 + 'seven';
undefined + 1;
null + 8;
undefined + '5';
'text' + null;

console.log("'24' / 4: ", 6);
console.log("18 * '3': ", 54);
console.log("'9' - '3': ", 6);
console.log("'seventeen' / 3: ", NaN);
console.log("4 * 'four': ", NaN);
console.log("17 / 0: ", Infinity);
console.log("10 + 'seven': ", "10seven");
console.log("undefined + 1: ", NaN);
console.log("null + 8: ", 8);
console.log("undefined + '5': ", "undefined5");
console.log("'text' + null: ", "textnull");

