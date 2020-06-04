const squaredNumber = () => {

    const el = [...document.querySelectorAll('.number')];
    const num = el.map(el => el.dataset.number);
    const numSqut = num.map(el => el * el); // **2
    return el.map((el, index) => el.dataset.numSqut = numSqut[index])

}

export {squaredNumber}
//squaredNumber();