//user ={
//userId: 'userid777',
//email:'userid777@example.com',
//};

export const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    setTimeout(() => callback({
        userId: userId,
        email: `${userId}@example.com`,
    }), Math.ceil(Math.random() * 1000));
};


