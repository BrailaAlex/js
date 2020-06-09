let tasks = [
    {
        text: 'Visit  party',
        done: false,
        id: '1',
        date: new Date('2020, 5, 5'),
    },

    {
        text: 'Visit doctor',
        done: true,
        id: '2',
        date: new Date('2020, 5, 7')
    },

    {
        text: 'Visit meat',
        done: true,
        id: '3',
        date: new Date('2020, 5, 6'),
    },

    {
        text: 'Pick up Tom from airport',
        done: false,
        id: '4',
        date: new Date('2020, 5, 8')
    },

    {
        text: 'Buy milk',
        done: false,
        id: '5',
        date: new Date('2020, 6, 5')
    },

];


const listElem = document.querySelector('.list')

const renderTasks = tasksList => {
    const listElem = document.querySelector('.list')


    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()

        .sort((a, b) => new Date(b.date) - new Date(a.date))
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
        date: new Date()
    })

    input.value = '';
    renderTasks(tasks)

}
console.log(tasks)