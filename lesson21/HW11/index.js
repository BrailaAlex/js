  export function squaredNumbers (){

    const el = [...document.querySelectorAll('.number')];
    const num = el.map(el => el.dataset.number);
    const numSqut = num.map(el => el ** 2); 
    return el.map((el, index) => el.dataset.squaredNumber = numSqut[index])

};


//squaredNumbers();