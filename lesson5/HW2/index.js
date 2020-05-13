function getPrimes(num) {
    
    for (let i = 2; i <= num; i++) { 

        for (let j = 2; j < i; j++) { 
          if (i % j == 0) continue 
         
        }
        return console.log(i)
         
    }
    

        }
    
    console.log(getPrimes(10));
    





//let n = 10;


//for (let i = 2; i <= n; i++) { 

 // for (let j = 2; j < i; j++) { 
  //  if (i % j == 0) continue  
 // }

  //console.log(i);
  
//}