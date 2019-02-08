"use strict";

var capitilizeStr = function capitilizeStr(str) {
  if (str === "") {
    return -1;
  } else {
    var lowerCase = str.toLowerCase();
    var regex = /.[^\s]+/gi;
    var strArr = lowerCase.match(regex);

    for (var i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].trim().split("");
      strArr[i][0] = strArr[i][0].toUpperCase();
      strArr[i] = strArr[i].join("");
    }

    var strCapitilized = strArr.join(" ");
    return strCapitilized;
  }
};