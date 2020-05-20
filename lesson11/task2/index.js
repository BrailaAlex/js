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

function sortContacts(arr, isAsk = true) {
    if (!Array.isArray(arr)) return null;
    if (isAsk === false)
        return arr.sort((a, b) => b.name.localeCompare(a.name));
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sortContacts(contacts));