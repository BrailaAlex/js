function createButton(string) {

    const str = document.createElement('button');
    str.textContent = `${string}`;

    const elBody = document.querySelector('body');
    elBody.append(str)
}
 //createButton('string')
