const baseUrl = 'https://5ef47069ac6d1e00168ca0c2.mockapi.io/api/v1/users';

//search for the desired element on the html page through the class
const formEl = document.querySelector('.login-form');
const buttonEl = document.querySelector('.submit-button');
const errorEl = document.querySelector('.error-text');
//search for all elements of the same class
const inputElem = [...document.querySelectorAll('form-input')]


//validate input using reportValidity using the ternary operator
//clear the form fields by setting an empty string

const validation = () => {
    formEl.reportValidity() ? buttonEl.disabled = false : buttonEl.disabled = true;
    errorEl.textContent = "";
};

//add a handler to formEl
formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = [...new FormData(formEl)]
        .reduce((acc, [input, value]) => ({ ...acc, [input]: value }), {})


    //send a request to the server using the fetch method
    fetch(baseUrl, {
        method: 'POST', // REST method to save information
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json()) //receiving a response in the format JSON
        .then(total => {
            inputElem.map(el => el.value = '');

            buttonEl.disabled = true;

            alert(JSON.stringify(total)) //display through alert the response from the server as an object
        })
        .catch(() => errorEl.textContent = 'Failed to create user')//handler for error when creating user


});

