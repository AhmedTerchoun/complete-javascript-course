//values and variables
const country = "Algeria"
const continent = "Africa"
let population = 50000000

console.log(country, continent, population)

//data types
const isIsland = false;
const language = "Arabic";

console.log(typeof (isIsland), typeof (population), typeof (country), typeof (language));



//basic operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);

let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;

console.log(description);

//strings and template literals

let description1 = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description1);

//taking decisions: if/else statements
if (population > 33000000) {
    console.log(`${country}'s population is above average`);
}
else {
    console.log(`${country}'s population is ${33000000 - population} below average`);
}

//equality operators
let numNeighbours = prompt("How many neighbouring countries does your country have?");

