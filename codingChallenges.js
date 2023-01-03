// //Fundamentals Part 1
// //Coding Challenge 1

// let markWeight = 95;
// let markHeight = 1.88;

// let johnWeight = 85;
// let johnHeight = 1.76;

// function calculateBmi(height, weight) {
//     return weight / (height ** 2);
// }

// let markHigherBmi = (calculateBmi(markHeight, markWeight) > calculateBmi(johnHeight, johnWeight) ? true : false);

// console.log(`Mark's Bmi is ${calculateBmi(markHeight, markWeight)}`);

// console.log(`John's Bmi is ${calculateBmi(johnHeight, johnWeight)}`)

// console.log(markHigherBmi);

// //Coding Challenge 2

// if (markHigherBmi) {
//     console.log(`Mark's BMI ${calculateBmi(markHeight, markWeight)} is Higher than John's ${calculateBmi(johnHeight, johnWeight)}`);
// } else {
//     console.log(`Johns's BMI ${calculateBmi(johnHeight, johnWeight)} is Higher than Mark's ${calculateBmi(markHeight, markWeight)}`);
// }

// //Coding Challenge 3

// let dolphins = [97, 522, 101];
// let koalas = [109, 95, 106];

// function averageScore(array) {
//     let sum = 0;
//     let counter = 0;
//     array.forEach(element => {
//         sum += element;
//         counter++;
//     });
//     return sum / counter;
// }

// let dolphinsAvg = averageScore(dolphins);
// let koalasAvg = averageScore(koalas);

// console.log('The average score for dolphins is ' + dolphinsAvg + ' and the average score for koalas is ' + koalasAvg);

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log('Dolphins are the Winners');
// } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
//     console.log('Koalas Are the Winners');
// }
// else if (dolphinsAvg === koalasAvg && dolphinsAvg > 100) {
//     console.log('It is a draw');
// }
// else {
//     console.log('No one Wins');
// }

// //Coding Challenge #4

// let bill = 240;
// let percent = (bill > 50 && bill < 300) ? 0.15 : 0.2;
// let tip = bill * percent;
// let total = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`);
// console.log(percent);



// //Fundamentals part 2
// //Coding Challenge #1

// let calcAverage = (array) => {
//     let sum = 0;
//     let counter = 0;
//     array.forEach(element => {
//         sum += element;
//         counter++;
//     })
//     return sum / counter;
// }

// let dolphinsAvg1 = calcAverage(dolphins);
// let koalasAvg1 = calcAverage(koalas);

// console.log(dolphinsAvg1);
// console.log(koalasAvg1);

// let checkWinner = (dolphinsAvg1, koalasAvg1) => {
//     if (dolphinsAvg1 > koalasAvg1 * 2) {
//         console.log(`Dolphins win (${dolphinsAvg1} vs. ${koalasAvg1})`);
//     } else if (koalasAvg1 >= dolphinsAvg1 * 2) {
//         console.log(`Koalas win (${koalasAvg1} vs. ${dolphinsAvg1})`);
//     }
//     else {
//         console.log("No winner");
//     }
// }

// checkWinner(dolphinsAvg1, koalasAvg1);

// //Coding Challenge #2


let calctip = (bill) => {
    if (bill > 50 && bill < 300) {
        newTip = 0.15;
    } else {
        newTip = 0.2;
    }
    return bill * newTip;
}

// console.log(calctip(20));

// let bills = [125, 155, 44];
// let tips = bills.map(calctip);


// console.log(tips);
// let totalBill = [];
// for (let i = 0; i < bills.length; i++) {
//     totalBill[i] = bills[i] + tips[i];
// }

// console.log(totalBill);

// //Coding Challenge #3

// const MarkObject = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height * this.height));
//         return this.bmi;
//     }

// };

// const JohnObject = {

//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height * this.height));
//         return this.bmi;
//     }
// };

// MarkObject.calcBMI();
// JohnObject.calcBMI();

// if (MarkObject.bmi > JohnObject.bmi) {
//     console.log(`Mark's BMI (${MarkObject.bmi}) is higher than John's (${JohnObject.bmi})`);
// } else {
//     console.log(`Mark's BMI (${MarkObject.bmi}) is lower than John's (${JohnObject.bmi})`);
// }

// //Coding Challenge #4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calctip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

let sum = 0;
let calcAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
