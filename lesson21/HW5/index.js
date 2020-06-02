
export function setButton(string){
    let button = document.querySelector('body');
    return button.innerText = `'<button>${string}</button>'`

}

//setButton('Click')