"use strict";
//coding challenge #1

const printForecast = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}C in ${i + 1} days`);
    }
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);