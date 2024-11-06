console.log("asd");

const cars = ["volvo", "BMW"];

cars[0] = "asd";
console.log(cars[1]);

const user = {
    name: "benjamin",
    age: 37,
};

user.name = "ane";
console.log(user.age);

const users = [
    {
        name: "peter",
        age: 23
    },
    {
        name: "hans",
        age: 30
    }
];

console.log(users);
const firstUser = users[0];
console.log(firstUser.age);

fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData.image)
    });


function isEven(number) {
    return number % 2 === 0
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false ;
    }
}