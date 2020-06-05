
   
const element = document.querySelectorAll('.pagination__page')
const handleClick = (event) => {
    console.log(event.target.textContent)
    
};
[...element].map(el => el.addEventListener('click', handleClick));


   
 

