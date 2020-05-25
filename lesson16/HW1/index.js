//input : number;



export function createArrayOfFunctions(number) {
    let array = [];
    if (number === undefined) {
        return array;
    } else if (typeof (number) !== "number") {
        return null;
    } else {
        for (let i = 0; i < number; i++) {
            array[i] = function () {
                return i;
            }
        }
        return array;
    }


}


