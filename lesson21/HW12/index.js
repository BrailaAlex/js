 
 export function getSection(num){

    const elSpan = document.querySelector(`span[data-number="${num}"]`);
        elSpan.closest('.box').dataset.section
    return elSpan;
}
 //getSection(5);


  