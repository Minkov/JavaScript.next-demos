"use strict";

var square = function (x) {
    return x * x;
};
//logs 36
console.log(square(6));

var Person = require("./person.es6").Person;

var people = [new Person("Doncho", "Minkov", 18), new Person("Ivaylo", "Petrov", 15), new Person("Krasimira", "Prodanova", 15), new Person("Teodor", "Kamenov", 15), new Person("Mariika", "Ivanova", 21), new Person("Georgi", "Georgiev", 18), new Person("Elena", "Stamirova", 18), new Person("Peter", "Ivanov", 21)];

var sortedAndFiltered = people.filter(function (person) {
    return person.age >= 18;
}).map(function (person) {
    return person.fullname;
}).sort(function (p1, p2) {
    return p1 > p2;
});

console.log(sortedAndFiltered.join(", "));