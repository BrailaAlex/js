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

const sortContacts = (persons, isAsk) => {
    if (!Array.isArray(persons)) { //если входящие данные-не массив
        return null;
    }
    if (isAsk = true){
        return persons.sort((a, b) => b.name.localeCompare(a.name)); 


    }else{
        return persons.sort((a, b) => a.name.localeCompare(b.name)); 

    }
        

    

}
console.table(sortContacts(contacts));
