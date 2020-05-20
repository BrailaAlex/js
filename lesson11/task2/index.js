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

const sortContacts = (persons, isAsk = true) => {
    if (!Array.isArray(persons)) { 
        return null;
    }
    if (isAsk === false)
        return persons.sort((a, b) => b.name.localeCompare(a.name)); 
          
        return persons.sort((a, b) => b.name.localeCompare(a.name)); 

    }
        

    


//console.table(sortContacts(contacts));
