const jsonString = { "name": "Alex" };

//console.log(jsonString);
//console.log(JSON.parse(jsonString));


export const parseUser = jsonString => {
    let result;
    try {
        result = JSON.parse(jsonString)

    } catch{
        return null



    };
    return result
}


//console.log(parseUser(jsonString));
