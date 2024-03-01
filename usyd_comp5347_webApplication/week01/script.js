"use strict";

var inputArr = [23, 9, 14, 2, 28, 19, 3, 15, 9, 25, 2, 4, 9];
function mean(inputArr) {
  var sum = 0;
  for (var i = 0; i < inputArr.length; i++) {
    sum += inputArr[i];
  }
  return sum / inputArr.length;
}

var meanArr = mean(inputArr);
console.log(`mean value` + meanArr);
