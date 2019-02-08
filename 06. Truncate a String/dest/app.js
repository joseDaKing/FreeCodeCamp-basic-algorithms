"use strict";

var truncateWords = function truncateWords(str, wordLength) {
  var regex = /.[^\s]+/gi;
  var strArr = str.match(regex);

  if (strArr.length === 0) {
    return -1;
  } else {
    var subArr = strArr.slice(0, wordLength);
    var subStr = subArr.join("");
    subStr += "...";
    return subStr;
  }
};

var truncateLetters = function truncateLetters(str, letterLength) {
  if (str === "") {
    return -1;
  } else {
    var substr = str.substring(0, letterLength);
    substr += "...";
    return substr;
  }
};

console.log(truncateLetters("Hej jag heter yousif vad heter du min vän?", 20));