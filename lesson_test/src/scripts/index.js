
import {initTodoListHandlers} from './todoList.js';
import {renderTask, renderTasks} from './renderer.js';

document.addEventListener('DOMContentLoaded', () =>{
    renderTasks();
    initTodoListHandlers();
});

const onStarageChange = e =>{
    if(e.key === 'tasksList'){
        renderTasks();
    }
};

window.addEventListener('storage', onStarageChange);