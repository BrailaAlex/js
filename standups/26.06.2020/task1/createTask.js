import {createTask, getTasks} from './gateway.js';
import{renderTasks} from './render.js'

//algo
//1. create task obj +++
//2. make post request with task+++
//3. render new task+++


export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
        };


    createTask(newTask)
    //.then(response => console.log(response));
        .then(() => getTasks())
        .then(newTasksList => {
            renderTasks(newTasksList);
        })
    
   
}