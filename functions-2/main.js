console.log("Script initiated");

let sum;
function getSum(a, b) {
    console.log(a + b);

    return a+b;
}

const sumOfNumbers = getSum(4, 10);
console.log(sumOfNumbers)
const average = sumOfNumbers/2;
console.log(average)


const emojiPrinter = () => {
    return "🎉❤️🚀"
}

console.log(emojiPrinter())

setTimeout(1000, function()  {
    console.log("🎉❤️🚀" )
})


function endsWithEmoji(string, emoji) {
    return string.endsWith(emoji);
}

const doesStringEndWithSmiley = endsWithEmoji("Hello 😀", "😀");
console.log(doesStringEndWithSmiley);





