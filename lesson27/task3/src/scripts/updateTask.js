import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list')

    if (!isCheckbox) {
        return;
    }

    const taskList = getItem('taskList');
    const newTaskList = taskList
        .map(task => {
            if (task.id === e.target.dataset.id) {
                return {
                    ...task,
                    done,
                    finishDate: done
                        ? new Date().toISOString()
                        : null
                };
            }
            return task;

        });

    setItem('tasksList', newTaskList);
    renderTasks();
}