
export function getTitle(){
    const content1 = document.querySelector('.title');
    return content1.textContent;
    
}
export function getDescription(){
    const content2 = document.querySelector('.about');
    return content2.innerText;
    
}
export function getPlans(){
    const content3 = document.querySelector('.plans');
    return content3.innerHTML;
    
}
export function getGoal(){
    const content4 = document.querySelector('.goal');
    return content4.outerHTML;
    
}


/*getTitle();
getDescription();
getPlans();
getGoal();*/
