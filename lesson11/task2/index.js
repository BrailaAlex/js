const contacts = [
    {
        name: 'Tom',
        phoneNumber: '222-22-22'
    },
    {
        name: 'Ann',
        phoneNumber: '333-33-33'
    },
    {
        name: 'Sam',
        phoneNumber: '444-44-44'
    },
    {
        name: 'Kate',
        phoneNumber: '555-55-55'
    },
    {
        name: 'Bill',
        phoneNumber: '666-66-66'
    },
];

const sortContacts = contacts =>{
    if(!Array.isArray(contacts)){
        return null;
    };
    const result = contacts
    .sort((a, b) => {
        return b.name.localeCompare(a.name);
    });

    return result;

};




console.log(sortContacts(contacts));
