"use strict";

var removeFalseValues = function removeFalseValues(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    var uppdatedArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        uppdatedArr.push(arr[i]);
      }
    }

    return uppdatedArr;
  }
};