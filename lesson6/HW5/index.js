const numbers = [1, 2, 3, 4, 5];

function reverseArray(num) {
    if (!Array.isArray(num)) {
        return null;
    }

    let reverseArr = [];

    for (let i = num.lenght - 1; i >= 0; i--) {
        reverseArr.push(num[i]);
        

    }

    
    return console.log(reverseArr);
    

}



let reverse1 = reverseArray(numbers);
console.log(reverse1);









 