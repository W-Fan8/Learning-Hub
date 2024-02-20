const hasDriversLicense = true
const hasGoodVision = false

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive) {
    console.log('sarah');
} else {
    console.log('someone');
}

const age = 19;
const drink = age >= 18 ? 'wine' : 'no wine';
console.log(drink)

