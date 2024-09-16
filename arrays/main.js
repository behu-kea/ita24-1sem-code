/*
const arr = [10, "asd", "benjamin", 40, 50];
arr[2] = "kea";

const fourthElement = arr[4];





let prices = [3, 7, 2, 9, 5];
let doublePrices = [];
let doublePrice = 0;

for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    const doublePrice = currentPrice * 2;
    doublePrices.push(doublePrice);
}

for (let i = 0; i < doublePrices.length; i++) {
    console.log("r is: " + doublePrices[i]);
}
*/

// Exercise 12 - level 3: Data Filtering
const searchData = ['apple', 'banana  ', '  Cherry', 'apple ', 'APPLE', '  Banana'];
const cleanedData = [];
searchData.forEach((entry, index) => {
    console.log(entry, index);
    const trimmedEntry = entry.trim();
    const trimmedLowerEntry = trimmedEntry.toLowerCase();
    cleanedData.push(trimmedLowerEntry);
});

console.log(cleanedData);
const noDuplicates = [...new Set(cleanedData)];
console.log(noDuplicates);


