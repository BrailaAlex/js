import { tasks } from './tasks.js';

function getTasks() {
    const localTasks = localStorage.getItem('tasksList');
    return localTasks ? JSON.parse(localTasks) : tasks;
}

function setTasks(tasks) {
    localStorage.setItem('tasksList', JSON.stringify(tasks))

}
export { getTasks, setTasks }