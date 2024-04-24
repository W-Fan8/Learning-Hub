'use strict';

const bookings = [];

const createBooking = function (
  fightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    fightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', undefined, 800);
