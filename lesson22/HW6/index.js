
const element = document.querySelectorAll('.btn')
const handleClick = (event) => {
    console.log(event.target.textContent)
    
};
[...element].map(el => el.addEventListener('click', handleClick));