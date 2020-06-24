const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');

const formElem = document.querySelector('form');

//algo
//1.validate
//2.handler form data +++
//2.1 gather form data +++
//2.2 create objet +++
//2.3 show alert +++


const handSubmit = event => {
    event.preventDefault();
    // console.log(event)
    const formData = new FormData(formElem)
    const formObj = Object.fromEntries(formElem)
    alert(JSON.stringify(formObj))
    //     .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
    // alert(JSON.stringify(formData));
}

const validateEmail = () => {
    console.log('validatePassword')
}

const validatePassword = () => {
    console.log('validatePassword')
}
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);




