//input : number;



export function createArrayOfFunctions(number) {
    let array = [];
    if (typeof (number) !== "number") {
        return null;
    } else if (number === undefined) {
        return array;
    } else {
        for (let i = 0; i < number; i++) {
            array[i] = function () {
                return i;
            }
        }
        return array;
    }


}


