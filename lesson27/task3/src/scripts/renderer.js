import { getItem } from "./storage"

const createCheckbox = ({done, id}) => {
    const checkboxElem = document.createElement
}







const createListItem = ({text, done, id}) =>{
    const listItemElem = document.createElement('listing')
    listItemElem.classList.add('List__item');
    const checkboxElem = createCheckbox({done, id})

    if(done){
        listItemElem.classList.add('list__item_done')
    }
    listItemElem.append(checkboxElem, text);

    return listItemElem;
}

export const renderTasks = () => {
const tasksList = getItem('tasksList') || [];

listElem.innerHTML = '';
const tasksElems = tasksList
.sort(compareTasks)
.map(createListItem);

listItem.append(...tasksElems);
}

