'use strict';

 export const event = {
    message: 'Well come to the party!',
    guests: [
        { name: 'John', age: 18, email: 'joni_li@server.com' },
        { name: 'Ann', age: 19, email: 'ann_grid@server.com' },
        { name: 'Bob', age: 19, email: 'bobik@server.com' },
        { name: 'Aline', age: 16, email: 'aline_gray@server.com' },
        { name: 'Miki', age: 17, email: 'miki_rurk@server.com' }
    ],


    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email, message: `Dear ${name}! ${this.message}`

            }));
        
       

    }
};



console.log(event.getInvitations());

