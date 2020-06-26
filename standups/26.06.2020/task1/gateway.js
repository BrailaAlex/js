const serverUrl = 'https://crudcrud.com/api/c03b4e97369f4177a7fb6233244c6406/tasks';

const createTask = (taskData) =>{
    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)

    });
}

const createTask = (taskData) =>{
    
}
const updateTask = (taskData) =>{
    
}
const deleteTask = (taskData) =>{
    
}
const geteTasks = (taskData) =>{
    debugger;
    fetch(serverUrl)
    .then(responce => {
        return responce.json()
    
})
.then(data => console.log(data));
}
    
