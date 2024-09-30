/*
function orFunction(a, b) {
    const result = a && b;

}

const orResult = orFunction(true, false);


const user = {
    name: "Alisa",
};

user.age = "43";
console.log(user.age)

console.log(user)


const data = {
    people: [
        { craft: "ISS", name: "Oleg Kononenko" },
        { craft: "ISS", name: "Nikolai Chub" },
        { craft: "ISS", name: "Tracy Caldwell Dyson" },
        { craft: "ISS", name: "Matthew Dominick" },
        { craft: "ISS", name: "Michael Barratt" },
        { craft: "ISS", name: "Jeanette Epps" },
        { craft: "ISS", name: "Alexander Grebenkin" },
        { craft: "ISS", name: "Butch Wilmore" },
        { craft: "ISS", name: "Sunita Williams" },
        { craft: "Tiangong", name: "Li Guangsu" },
        { craft: "Tiangong", name: "Li Cong" },
        { craft: "Tiangong", name: "Ye Guangfu" }
    ],
    number: 12,
    message: "success"
};



const cart = [
    {name: 'apple', price: 1, quantity: 3},
    {name: 'banana', price: 2, quantity: 2},
    {name: 'cherry', price: 3, quantity: 1}
];

function getPrice(cart) {
    let totalPrice = 0;
    for(let item in cart) {
        if(item.price !== undefined && item.quantity !== undefined) {
            const productPriceTotal = item.price * item.quantity;
            totalPrice = totalPrice + productPriceTotal;
        }
    }

    return totalPrice;
}

const cartPrice = getPrice(cart);
console.log(cartPrice);

*/

/*
1. string to word array - TJEK
2. Iterate through each word - TJEK
3. if sætning, tjekke om ord er positivt eller negativt - TJEK
4. Score

 */
function getSentimentScore(string) {
    let score = 0;
    const wordArray = string.split(" ");
    console.log(wordArray);

    const positiveWords = ['happy', 'awesome', 'super'];
    const negativeWords = ['fuck', 'shit'];

    const postiveWordsInString = [];
    const negativeWordsInString = [];

    for (let word of wordArray) {
        console.log(word);

        if(positiveWords.includes(word)) {
            score++;
            postiveWordsInString.push(word);
        }

        if(negativeWords.includes(word)) {
            score--;
            negativeWordsInString.push(word);
        }
    }

    console.log(postiveWordsInString)
    console.log(negativeWordsInString)

    return {
        score: score,
        negativeWords: negativeWordsInString,
        positiveWords: postiveWordsInString,
    };
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy shit');
console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/


