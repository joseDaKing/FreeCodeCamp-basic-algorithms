"use strict";

var str = "Hi my name is yousef and i am 20 years old";

var longestWord = function longestWord(str) {
  var regex = /[a-z]+/gi;
  var words = str.match(regex);
  words.sort(function (a, b) {
    return a.length < b.length;
  });
  console.log("The longest word is ".concat(words[0], " and it contains ").concat(words[0].length, " letters."));
  return {
    string: words[0],
    length: words[0].length
  };
};

longestWord(str);