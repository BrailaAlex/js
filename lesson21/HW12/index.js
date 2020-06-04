
export const getSection = (num) => {
    const elSpan = document.querySelector(`span[data-number="${num}"]`)
        .closest('.box').dataset.section
    return elSpan
}
//getSection(5);


