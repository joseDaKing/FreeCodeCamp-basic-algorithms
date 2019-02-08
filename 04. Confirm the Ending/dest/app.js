"use strict";

var confirmStrEnding = function confirmStrEnding(str, ending) {
  var endingSize = ending.length;
  var strSize = str.length;

  if (ending === "" || str === "" || strSize < endingSize) {
    return -1;
  } else {
    var substr = str.substring(strSize - endingSize);

    if (substr === ending) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
};