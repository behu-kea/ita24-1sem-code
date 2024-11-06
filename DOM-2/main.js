console.log("asd");


// 1. make html - done
// 2. select all elements that should be used i application using querySelector - done
// 3. click listener - done
// 1. Hive fat i det brugeren skrev - done
// 2. Noget timer. Sætte en timer på antal sekunder brugern skrev

const inputElement = document.querySelector("input#seconds");
console.log(inputElement);
const buttonElement = document.querySelector("button");
console.log(buttonElement);
const timerTitleElement = document.querySelector("span.timer-title");
const timerSecondsElement = document.querySelector("span.timer-seconds");
console.log(timerTitleElement);
console.log(timerSecondsElement);

let seconds = 0;

// taken from chatgpt
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const setTimer = () => {
    const secondsInput = inputElement.value;
    seconds = Number(secondsInput);
    timerTitleElement.innerHTML = `${secondsInput} sekunder timer er startet`;

    const randomNumber = getRandomInt(0, 2);
    if(randomNumber === 1) {
        seconds = getRandomInt(5, 10);
    }

    //setTimeout()
    setInterval(() => {
        if(seconds > 0) {
            seconds--;
            timerSecondsElement.textContent = seconds;
        }
    }, 1000);
}

buttonElement.addEventListener("click", setTimer);




//<img style="position:fixed;top: 0; left: 0; background-color: black; z-index:1000; width: 100vw; height: 100vh;" src="http://url.to.file.which/not.exist" onerror=alert(document.cookie);>
//<div  style="position:fixed;top: 0; left: 0; background-color: black; z-index:1000; width: 100vw; height: 100vh;">hejhje</div>


/*
const inputNotEmptyAndText = getInput.value !== "" && !isNaN(Number(getInput.value));

if(inputNotEmptyAndText) {

}

 */