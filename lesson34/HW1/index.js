const baseUrl = 'https://5ef47069ac6d1e00168ca0c2.mockapi.io/api/v1/users';

export const getUsersList = () => 
fetch(baseUrl).then(responce => responce.json());

export const getUserById = userId => 
fetch(`${baseUrl}/${userId}`)
.then(responce => responce.json());

export function createUser(object) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application',
        },
        body: JSON.stringify(object)

    })

};

export function updateUser(userId, object) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application',

        },
        body: JSON.stringify(object)

    })

};

export const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    })
};




//console.log(getUsersList());
//console.log(getUserById(3));


