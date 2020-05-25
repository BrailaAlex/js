//input : number;

const array = [];

export function createArrayOfFunctions(number) {
    if (typeof (number) === number) {
        return null;
    } else if (number === undefined) {
        return array;
    } else {
        for (let i = 0; i < 0; i++) {
            array[i] = function () {
                return i;
            }
        }
        return array;
    }


}


