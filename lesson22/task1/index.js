const divEl = document.querySelector('.rect_div');
const pEl = document.querySelector('.rect_p');
const spanEl = document.querySelector('.rect_span');
const btnClear = document.querySelector('.clear-btn');
const btnRemove = document.querySelector('.remove-handlers-btn');
const btnAttach_handleds = document.querySelector('.attach-handlers-btn');

const target = (text, color) => {
    const eventsListEl = document.querySelector('.events-list');

    eventsListEl.innerHTML += `<span style="color: ${color}; margin-left: 8px"> ${text} </span>`
}
//green log
const greenDiv = target.bind(null, 'div', 'green')
const greenP = target.bind(null, 'p', 'green')
const greenSpan = target.bind(null, 'span', 'green')
//grey log
const greyDiv = target.bind(null, 'div', 'grey')
const greyP = target.bind(null, 'p', 'grey')
const greySpan = target.bind(null, 'span', 'grey')


const eventListClear = () => { document.querySelector('.events-list').innerHTML = '' }
btnClear.addEventListener('click', eventListClear)


const removeHandlers = () => {
    divEl.removeEventListener('click', greyDiv, { capture: true });
    pEl.removeEventListener('click', greyP, true);
    spanEl.removeEventListener('click', greySpan, true);
    divEl.removeEventListener('click', greenDiv);
    pEl.removeEventListener('click', greenP);
    spanEl.removeEventListener('click', greenSpan);
}
btnRemove.addEventListener('click', removeHandlers)


const attachHandlers = () => {
    divEl.addEventListener('click', greyDiv, { capture: true });
    pEl.addEventListener('click', greyP, true);
    spanEl.addEventListener('click', greySpan, true);
    divEl.addEventListener('click', greenDiv);
    pEl.addEventListener('click', greenP);
    spanEl.addEventListener('click', greenSpan);
}

btnAttach_handleds.addEventListener('click', attachHandlers)
attachHandlers()



