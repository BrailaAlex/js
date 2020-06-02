
 export function setButton(string){
    let button = document.querySelector('body');
    return button.innerHTML = `<button>${string}</button>`

}

//setButton('Click')