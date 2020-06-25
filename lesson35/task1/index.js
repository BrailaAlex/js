window.addEventListener("error", function onUnhandledError (err) {
    console.error("error", err.message);
});

let userParsingResult;
const jsonString1 = '{"name": "John"}'

try {
    const user = JSON.parse(jsonString1);
    console.log("User data: ", user);
    userParsingResult = "success";
} catch(e) {
    userParsingResult = "error";
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;
const product = '{"name": "John"'

try {
    const product = JSON.parse(jsonString2);
    console.log("Product data: ", product);
    productParsingResult = "success";
} catch(e) {
    productParsingResult = "error";
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}