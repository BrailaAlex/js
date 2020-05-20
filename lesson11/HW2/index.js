
//let name = '12.123.1234.12345';

const countOccurrences = (str, substr) => {

    if (substr === '') return null;

    return str.split(substr).length - 1;
}


//console.log(countOccurrences(name, 2));