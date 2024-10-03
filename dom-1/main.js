console.log("script initiated");

const button = document.querySelector("p");
console.log(button);

function logMessage() {
    console.log("hello");

    return "asd"
}

const logMessage2 = () => {
    console.log("log from error function")
}

const returnFromLogmessage = logMessage();
console.log(returnFromLogmessage);
console.log(logMessage);

button.addEventListener("click", logMessage2);

logMessage
button.addEventListener("mouseover", () => {
    console.log("in")
});
button.addEventListener("mouseout", () => {
    console.log("out")
});


// 1. Create a p tag
const pTag = document.createElement('p');
// 2. Change the ptags innerHTML
pTag.innerHTML = "this text is in the pTAg";
//3. Insert the p tag into html
document.querySelector("body").appendChild(pTag);