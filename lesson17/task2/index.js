const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message)
        console.log(phoneNumber);

    },
    showDeferredPrompt(time) {
        setTimeout(() => this.showPrompt(), time)

    }


};
///callbackPrompt.showDeferredPrompt(1000);