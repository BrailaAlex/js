export const delay = value => new Promise((resolve) =>

        setTimeout(() => resolve(), value))

    .then(() => console.log('Done'))


 //delay(3000);
 //delay(6000);
 //delay(9000);