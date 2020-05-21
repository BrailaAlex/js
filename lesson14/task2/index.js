


const createMesseger = () => {

    let message = 'Just learn it';
    const sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);

    }

    function setMessage(text) {
        message = text;
    }

    function setSender(text) {
        sender = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };

};
export default createMesseger;

const messenger1 = createMessenger();

const messenger2 = createMessenger();

const messenger3 = createMessenger();


messenger1.sendMessage('Bob');
messenger2.setMessage('Good job')
messenger2.sendMessage('Bob')

messenger3.setSender('Gromcode');
messenger3.sendMessage('Bob');