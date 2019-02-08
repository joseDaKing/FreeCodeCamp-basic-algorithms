"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var frankenSplice = function frankenSplice(arr1, arr2, n) {
  if (arr1.length === 0 || arr2.length === 0) {
    return null;
  } else {
    var subArrFront, subArrBack, frankenArr, arr2Length;
    arr2Length = arr2.length;
    subArrFront = _toConsumableArray(arr2).slice(0, n);
    subArrBack = _toConsumableArray(arr2).slice(arr2Length - n, arr2Length);
    frankenArr = _toConsumableArray(arr1);

    for (var i = n - 1; i >= 0; i--) {
      frankenArr.splice(0, 0, subArrFront[i]);
    }

    for (var _i = 0; _i < n; _i++) {
      frankenArr.splice(frankenArr.length, 0, subArrBack[_i]);
    }

    console.log(frankenArr);
    return frankenArr;
  }
};