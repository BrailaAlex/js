
const clickButton = document.querySelector('.single-use-btn');
const handler = () => {
    console.log('clicked')
    clickButton.removeEventListener('click', handler);
};

clickButton.addEventListener('click', handler);