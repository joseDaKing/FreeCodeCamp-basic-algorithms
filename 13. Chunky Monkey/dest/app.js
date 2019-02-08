"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var divideArr = function divideArr(arr, size) {
  if (Array.length === 0) {
    return null;
  } else {
    var entireArr = _toConsumableArray(arr);

    var dividedArr = [];
    var nestedArrLength = Math.floor(arr.length / size);

    for (var a = 0; a < nestedArrLength; a++) {
      dividedArr.push([]);

      for (var i = 0; i < size; i++) {
        dividedArr[a].push(entireArr.shift());
      }
    }

    if (0 < entireArr.length) {
      dividedArr.push(entireArr);
    }

    console.log(dividedArr);
    return [].concat(dividedArr);
  }
}; //divideArr(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].


divideArr(["a", "b", "c", "d"], 2); //divideArr([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].

divideArr([0, 1, 2, 3, 4, 5], 3); //divideArr([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].

divideArr([0, 1, 2, 3, 4, 5], 2); //divideArr([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].

divideArr([0, 1, 2, 3, 4, 5], 4); //divideArr([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].

divideArr([0, 1, 2, 3, 4, 5, 6], 3); //divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);