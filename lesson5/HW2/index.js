function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    let numPr = true;
    for (let j = 2; j * 2 <=i; j++){
      if (i % j === 0){
        numPr = false;
      }
    }
    if (numPr && i > 1){
        console.log(i);
    }
    
  }

}

//getPrimes(10)











