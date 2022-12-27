// //values and variables
// const country = "Algeria"
// const continent = "Africa"
// let population = 50000000

// console.log(country, continent, population)

// //data types
// const isIsland = false;
// const language = "Arabic";

// console.log(typeof (isIsland), typeof (population), typeof (country), typeof (language));



// //basic operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6000000);
// console.log(population < 33000000);

// let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;

// console.log(description);

// //strings and template literals

// let description1 = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description1);

// //taking decisions: if/else statements
// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// }
// else {
//     console.log(`${country}'s population is ${33000000 - population} below average`);
// }

// //equality operators
// // let numNeighbours = prompt("How many neighbouring countries does your country have?");
// // numNeighbours = Number(numNeighbours);
// // console.log(numNeighbours);
// // if (numNeighbours === 1) {
// //     console.log('Only 1 border!');
// // } else if (numNeighbours > 1) {
// //     console.log('More than one border');
// // }
// // else {
// //     console.log('No Borders');
// // }

// //logical operators
// if (language === 'Arabic' && population < 50000001 && isIsland === false) {
//     console.log(`${country} is the right place for you`);
// } else {
//     console.log(`${country} is not the right place for you`);
// }

// //switch statement
// switch (language) {
//     case "Chinese":
//     case "Mandarin": console.log("Most Number of native Speakers");

//         break;
//     case "Spanish": console.log('2nd place in number of native speakers');
//         break;
//     case "English": console.log('3rd place');
//         break;
//     case "Hindi": console.log("Number 4");
//         break;
//     case "Arabic": console.log("5th most spoken language");
//     default:
//         console.log("Great Language too :D");
//         break;
// }

// //conditional  (Ternary operator)

// console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);




//Fundamentals Part 2

//Functions

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
}

describeCountry("Algeria", 50000000, "Algiers");
describeCountry("Qatar", 2000000, "Doha");
describeCountry("Egypt", 100000000, "Cairo");

//function declarations vs Expressions

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

let popOfAlgeria = percentageOfWorld1(50000000);
let popOfEgypt = percentageOfWorld1(100000000);
let popOfQatar = percentageOfWorld1(2000000);

console.log(`${popOfAlgeria} + ${popOfEgypt} + ${popOfQatar}`);

const percentageOfWorld2 = function (population) {
    console.log((population / 7900000000) * 100);
}

// console.log(`${percentageOfWorld2(50000000)} + ${percentageOfWorld2(100000000)} + ${percentageOfWorld2(2000000)}`);
//arrow functions

const percentageOfWorld3 = population => {
    console.log((population / 7900000000) * 100);
}

percentageOfWorld3(50000000);
percentageOfWorld3(100000000);
percentageOfWorld3(2000000);

//functions calling other functions

const describePopulation = (country, population) => {
    console.log(`${country} has ${population} people, which is about ${percentageOfWorld1(population)}`);
}

describePopulation("Algeria", 50000000);

//introduction to arrays

let populations = [50000000, 100000000, 2000000, 33000000];
console.log(populations.length === 4 ? true : false);

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])]

console.log(percentages);

//basic array operations

let neighbours = ['Morocco', 'Libya', 'Tunisia', 'Niger', 'Mauritania'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop;
console.log(neighbours);
if (neighbours.indexOf('Germany') === -1) {
    console.log('probably not a central european country');
}

let index = neighbours.indexOf('Morocco');

neighbours[index] = 'Kingdom of Morocco';

console.log(neighbours);

//introduction to Objects

const myCountry = {
    country: "Algeria",
    capital: "Algiers",
    language: "Arabic",
    population: 50000000,
    neighbours: ['Morocco', 'Libya', 'Tunisia', 'Niger', 'Mauritania'],
    describe: function () {
        console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = (this.neighbours.length === 0) ? true : false;
    }
};



myCountry.population += 2000000;
console.log(myCountry);
myCountry['population'] -= 2000000;
console.log(myCountry);

myCountry.describe();
