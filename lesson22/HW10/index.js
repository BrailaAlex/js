// 1. create array of tasks - and create 5 tasks +++
// 2. write reanderTasks (tasks) fucn that render all tasks +++
// 3. addEventListener for .list +++
// 4. addEventListener for create button +++
// 5. chekbox handler - update task in the array and reander tasks +++
// 6. create hadler - create task object and put to the array and rendler tasks +++


let tasks = [

    {
        text: 'Hello',
        done: false,
        id: '1111'
    },
    {
        text: 'go to the gym',
        done: true,
        id: '2222'
    },
    {
        text: 'lunch',
        done: true,
        id: '3333'
    },
    {
        text: 'exit',
        done: false,
        id: '4444'
    },
    {
        text: 'quit',
        done: false,
        id: '5555'
    },

];

const listElem = document.querySelector('.list')

const renderTasks = tasksList => {
    const listElem = document.querySelector('.list')


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

renderTasks(tasks)
listElem.addEventListener('click', updateTask);
function updateTask(event) {
    const classes = event.target.classList;
    if (!classes.contains('list__item-checkbox'))
        return;
    const tar = event.target
    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    task.done = tar.checked
    renderTasks(tasks)

}

const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask(event) {
    const input = document.querySelector('.task-input');
    if (!input.value) { return }
    tasks.push({
        text: input.value,
        done: false,
        id: String(tasks.length + 1),
    })
    input.value = '';

    renderTasks(tasks)

}