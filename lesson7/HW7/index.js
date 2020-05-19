//const arrNames = ['Alex', 'Bill', 'Bob', 'Ann', 'Sandra', 'Irenn', 'Michel', 'Sinatra'];
//const text = 'ra';

const filterNames = (arrNames, text) => {

    const arr = arrNames.filter((name) => {
        return name.length > 5 && name.includes(text);



    })
    return arr;

}

//console.log(filterNames(arrNames, text));


