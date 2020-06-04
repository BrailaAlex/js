export function finishList() {
    const elLi1 = document.createElement('li');
    const elLi4 = document.createElement('li');
    const elLi6 = document.createElement('li');
    const elLi8 = document.createElement('li');

    elLi1.textContent = '1';
    elLi4.textContent = '4';
    elLi6.textContent = '6';
    elLi8.textContent = '8';

    const elementList = document.querySelector('.list');

    elementList.prepend(elLi1)
    elementList.append(elLi8)

    const elSpecial = document.querySelector('.special');
    elSpecial.before(elLi4);
    elSpecial.after(elLi6)
};

//finishList();

