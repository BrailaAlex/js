const baseUrl = 'https://5ef47069ac6d1e00168ca0c2.mockapi.io/api/v1/users';

export const getUsersList = () => 
fetch(baseUrl).then(responce => responce.json());

export const getUserById = userId => 
fetch(`${baseUrl}/${userId}`)
.then(responce => responce.json());

export function createUser(obj) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)

    })

};

export function updateUser(userId, obj) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(obj)

    })

};

export const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    })
};




//console.log(getUsersList());
//console.log(getUserById(3));


