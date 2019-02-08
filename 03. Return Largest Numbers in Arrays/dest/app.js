"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var largestNumberOfArrays = function largestNumberOfArrays(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    var largestNumberArr = [];

    for (var i = 0; i < arr.length; i++) {
      largestNumberArr.push(_toConsumableArray(arr)[i].sort(function (a, b) {
        return a < b;
      })[0]);
    }

    return largestNumberArr;
  }
};