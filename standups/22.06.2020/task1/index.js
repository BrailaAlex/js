
//part 1
//const setButton = (buttonText) =>{
    //const button = `<button>${buttonText}</button>`;

    //document.querySelector('body').innerHTML = button;



//}
//setButton('click');

//part2
const setButton = (buttonText) =>{
const button = document.createElement('button');
button.textContent = buttonText;

    document.querySelector('body').append(button);
}
    //setButton('click');
