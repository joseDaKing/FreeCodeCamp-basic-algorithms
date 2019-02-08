"use strict";

var repeatStrNumTimes = function repeatStrNumTimes(str, num) {
  if (num === "") {
    return -1;
  } else {
    var repeatStr = "";

    for (var i = 1; i <= num; i++) {
      repeatStr += str;
    }

    console.log(repeatStr);
    return repeatStr;
  }
};