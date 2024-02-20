'use strict';

/*
function logger() {
    console.log('mamamma');
}

logger();
logger();

*/

const calAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

// arrow function
const calAge3 = birthYeah => 2037 - birthYeah;

const age3 = calAge3(1991)
console.log(age3)

const calAge4 = (birthYeah, firstname) => {
    const age = 2037 - birthYeah
    return `${age} retires in.`;
}

console.log(calAge4(2012, 'ddd'))

const CalcAverage = () => {

}