// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [4, 5, 76, 23, -85, 32, 123, 5, 0];
// let max = temperatures[0];
// let min = temperatures[0];
// const mergedTemps = temperatures.concat(temperatures2);

// const calculateAmplitude = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (!isNaN(array[i])) {
//             if (array[i] > max) {
//                 max = array[i];
//             } else if (array[i] < min) {
//                 min = array[i];
//             }
//         }
//     }
//     return max - min;
// };

// console.log(calculateAmplitude(temperatures));
// console.log(calculateAmplitude(temperatures2));
// console.log(calculateAmplitude(mergedTemps));

const measureKelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // value: prompt("Degrees Celsius:"),
    };

    const kelvin = measurement.value + 273;

    return kelvin;
};

console.log(measureKelvin());