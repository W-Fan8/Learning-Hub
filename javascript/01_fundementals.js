const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('sarah');
} else {
  console.log('someone');
}

const age = 19;
const drink = age >= 18 ? 'wine' : 'no wine';
console.log(drink);

const jessica2 = {
  firstName: 'jessica',
};

const jecopy = Object.assign({}, jessica2);
jecopy.firstName = 'Dadvis';
console.log(jessica2);
console.log(jecopy);
