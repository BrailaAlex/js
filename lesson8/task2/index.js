const user ={
    name: 'Tom',
    key: 17,

}



const concatProps = obj =>{
    let arr =[];

    for (let key in obj){
        arr.push(obj[key])
        
            
        }
        return arr;;
    }







let arr1 = concatProps(user);
console.log(arr1);
