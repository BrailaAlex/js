const fetchFunction = async request => {
    try {
        const result = await fetch(`https://api.github.com/users/${request}`);
        if (result.status === 200) {
            return result.json();
        }
        return result
    } catch (err) {
        console.log(err.message);
    }

}

export const getUsersBlogs = async usersId => {
    try {
        return Promise.all(usersId.map(response =>
            fetchFunction(response)
            .then(user => user.blog)

        ))

    } catch (error) {
        throw new Error("Failed");
    }

};

const userId = (['google', 'facebook', 'gaearon']);


getUsersBlogs(userId)
    .then(response => console.log(response))