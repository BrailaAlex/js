export function finishForm() {
    const atribute = document.querySelector('input[type = text]');
    atribute.type = 'password';

    const endLi = document.createElement('input');
    endLi.setAttribute('type', 'text');
    endLi.setAttribute('name', 'login');

    const input = document.querySelector('.login-form');
    input.prepend(endLi);

}

//finishForm();