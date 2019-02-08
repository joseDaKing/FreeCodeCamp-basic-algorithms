"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var mutationV1 = function mutationV1(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    var removeDuplicate = function removeDuplicate(arr) {
      var set = new Set(arr);
      return _toConsumableArray(set);
    };

    var firstArr = removeDuplicate(_toConsumableArray(arr)[0].toLowerCase().split("")).sort();
    var lastArr = removeDuplicate(_toConsumableArray(arr)[1].toLowerCase().split("")).sort();
    var containsAllLetter = true;

    for (var i = 0; i < lastArr.length; i++) {
      if (!firstArr.includes(lastArr[i])) {
        containsAllLetter = false;
        break;
      }
    }

    return containsAllLetter;
  }
};

var mutation = function mutation(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    var removeDuplicate = function removeDuplicate(arr) {
      var set = new Set(arr);
      return _toConsumableArray(set);
    };

    var firstArr = removeDuplicate(_toConsumableArray(arr)[0].toLowerCase().split(""));
    var lastArr = removeDuplicate(_toConsumableArray(arr)[1].toLowerCase().split(""));
    var containsAllLetter = true;

    for (var i = 0; i < lastArr.length; i++) {
      if (firstArr.indexOf(lastArr[i]) === -1) {
        containsAllLetter = false;
        break;
      }
    }

    console.log(containsAllLetter);
    return containsAllLetter;
  }
};

mutation(["hello", "Hello"]); //should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //should return true.

mutation(["mary", "army"]); //should return true.

mutation(["mary", "aarmy"]); //should return true.

mutation(["alien", "line"]); //should return true.

mutation(["floor", "for"]); //should return true.

mutation(["hello", "neo"]); //should return false.

mutation(["voodoo", "no"]); //should return false.