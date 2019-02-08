"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getIndexToIns = function getIndexToIns(arr, value) {
  if (arr.length === 0) {
    return 0;
  } else {
    var sortedArr = _toConsumableArray(arr).sort(function (a, b) {
      return a > b;
    });

    var lowestIndex;

    for (var i = 0; i <= arr.length; i++) {
      if (sortedArr[i] < value) {
        lowestIndex = i;
      }
    }

    lowestIndex++;

    if (isNaN(lowestIndex)) {
      lowestIndex = 0;
    }

    return lowestIndex;
  }
};