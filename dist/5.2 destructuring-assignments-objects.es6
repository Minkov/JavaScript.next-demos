"use strict";

var Person = require("./person.es6").Person;

var person = new Person("Doncho", "Minkov", 19);

var fullname = person.fullname;
var age = person.age;

console.log(fullname, age);

var address = {
    country: "Bulgaria",
    city: "Burgas",
    street: {
        name: "Aleksandrovska",
        number: 34
    }
};

var city = address.city;
var streetName = address.street.name;

console.log(city, streetName);

function minMax(numbers) {
    return {
        min: Math.min.apply(null, numbers),
        max: Math.max.apply(null, numbers)
    };
}

var _minMax = minMax([1, 2, 3, 4, -111, 5, 1, 2, 3, 1000, 3, 4]);

var min = _minMax.min;
var max = _minMax.max;

console.log(min, max);