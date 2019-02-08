"use strict";

var factorialize = function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    var factor = 1;

    for (var i = 1; i <= num; i++) {
      factor *= i;
    }

    return factor;
  }
};

console.log(factorialize(0));