// 1. create array of tasks - and create 5 tasks +++
// 2. write reanderTasks (tasks) fucn that render all tasks +++
// 3. addEventListener for .list +++
// 4. addEventListener for create button +++
// 5. chekbox handler - update task in the array and reander tasks +++
// 6. create hadler - create task object and put to the array and rendler tasks +++

const tasks = [
    {
        text: 'Hello',
        done: false
    },
    {
        text: 'Go to the gyn',
        done: false
    },
    {
        text: 'Lunch',
        done: false
    },
    {
        text: 'Exit',
        done: false
    },
    {
        text: 'Rent a car',
        done: false
    }

];
const listElem = document.querySelector('.list')

const renderTasks = (tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map((task) => {

            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-task-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, task.text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

renderTasks(tasks);

//update task

listElem.addEventListener("click", updateTask);

function updateTask(event) {
    const classes = event.target.classList;
    if (!classes.contains("list_item-chekbox"))
        return;
    const tasks = tasks.find(task => task.id === event.target.dataset.taskId)
}

const createBtn = document.querySelector(".btn");
createBtn.addEventListener("click", createTask);

function createTask(event) {

    const input = document.querySelector('.task-input');
    const inputVal = input.value;

    if (!inputVal)
        return;
    const newTask = {
        text: input.value,
        done: false
    }

    input.value = '';
    tasks.push(newTask);
    renderTasks(tasks);

}


