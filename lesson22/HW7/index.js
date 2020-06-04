
const element = document.querySelector('.text-input');

element.addEventListener('change', (event) => {
    console.log(event.target.value);
});