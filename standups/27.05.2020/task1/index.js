//input: array,array;
//otput: object;


//algo:
//1. iterate keysList;
//2. get value by index & put to the object;

/*function buildObject(keysList, valuesList){
    return keysList.reduce((acc, key, index) => {

        console.log('ACC ', acc);
        console.log('INDEX', index);
        console.log("KEY ", key);
       
        
        let value = valuesList[index];

        
        console.log("VALUE ",value);
        
        let obj = Object.assign(acc, {[key]: value});

        console.log("OBJ ", obj);
        

        return obj;
   }, {});
    

};

let keys = ['name', 'city', 'price'];
 let values = ['Denis', 'Lviv', 300];

 console.log(buildObject(keys,values));*/



        
        function buildObject(keysList, valueList) {

            return keysList.reduce((acc, key, index) => {

                return Object.assign(acc,
                                        {
                    [key]: valueList[index]
                });
            });
        }
    

        


 //DEMO

/*let key = 'Location';
let value = 'Kiev';

let obj = {[key]: value };
console.log(obj);*/



