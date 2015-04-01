"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var x = 1;
var y = 2;

// x gets 1, y gets 2

var _ref = [y, x];

var _ref2 = _slicedToArray(_ref, 2);

x = _ref2[0];
y = _ref2[1];

//swaps the two values

var _ref3 = [1, 2, 3];
var first = _ref3[0];
var second = _ref3[1];

//first = 1, second = 2

var a = 1;
var b = 2;
var rest = [3, 4, 5];

//a = 1, b = 2, rest = [3, 4, 5]

var _ref4 = [1, 2, 3];
var start = _ref4[0];
var end = _ref4[2];

//start = 1, end = 3

function minMax(numbers) {
    return [Math.min.apply(null, numbers), Math.max.apply(null, numbers)];
}

var _minMax = minMax([1, 2, 3, 4, -111, 5, 1, 2, 3, 1000, 3, 4]);

var _minMax2 = _slicedToArray(_minMax, 2);

var min = _minMax2[0];
var max = _minMax2[1];

//min = -111
//max = 100

console.log(min);
console.log(max);