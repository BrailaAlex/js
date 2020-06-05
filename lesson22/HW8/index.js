
const element = document.querySelector('.task-status');

element.addEventListener('change', (event) => {
    console.log(event.target.checked);
});