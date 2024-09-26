/*
console.log("Script initiated");

function getNumberOfCharacters(word) {
    return word.length;
}

const numberOfCharacters = getNumberOfCharacters("Kea er sej");


function isNumberLargerThanSeven(number) {
    console.log(number);
    const numberLarger = number > 7;

    return numberLarger;
}

console.log(isNumberLargerThanSeven(5));

console.log(isNumberLargerThanSeven(121));

function stringChecker(string, number) {
    //console.log(string);
    const stringlenght = string.length
    return stringlenght;
}

console.log(stringChecker("asd"))
const returnValue = stringChecker("benjamin");
console.log(returnValue)

*/

function getOutfitFromTemperature(temperatureInCelcius) {
    console.log(temperatureInCelcius);

    if(temperatureInCelcius > 30) {
        return "wear shorts";
    } else if (temperatureInCelcius > 20) {
        return "wear tshrit";
    } else if (temperatureInCelcius > 10) {
         return "wear trousers";
    } else {
        return "not done yet";
    }

    //return temperatureInCelcius;
}

console.log(122)


console.log(getOutfitFromTemperature(122));






const clothesToWear = getOutfitFromTemperature(15);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"