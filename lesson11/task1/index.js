

const splitText = (text, len) => {
    if (typeof text !== 'string') {
        return null
    };
    const strArr = [];
    let startPosition = 0;


    while (true) {
         
        let chunk = text.substr(0, len);
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition +=0;

        if(chunk.length ===0){
            break;
        }
    }


return strArr.join('\n');


};






console.log(splitText('abcdfhgiklm', 4));
