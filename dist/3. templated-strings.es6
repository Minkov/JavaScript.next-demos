"use strict";

var itemsHtml = "";
var people = [{
    name: "Doncho Minkov",
    nickname: "The JS Master"
}, {
    name: "Peter Ivanov",
    nickname: "The student"
}, {
    name: "Mariika Ivanova",
    nickname: "the Mother of all"
}];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = people[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var person = _step.value;

        itemsHtml += "<li>" + person.name + " is also known as " + person.nickname + "</li>";
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var listHtml = "<ul>" + itemsHtml + "</ul>";

console.log(listHtml);