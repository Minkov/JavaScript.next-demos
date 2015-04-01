var square = (x) => x*x;
//logs 36
console.log(square(6));

import {Person} from './person.es6'

let people = [
    new Person('Doncho', 'Minkov', 18),
    new Person('Ivaylo', 'Petrov', 15),
    new Person('Krasimira', 'Prodanova', 15),
    new Person('Teodor', 'Kamenov', 15),
    new Person('Mariika', 'Ivanova', 21),
    new Person('Georgi', 'Georgiev', 18),
    new Person('Elena', 'Stamirova', 18),
    new Person('Peter', 'Ivanov', 21)
];


var sortedAndFiltered= people.filter(person=> person.age>=18)
    .map(person => person.fullname)
    .sort((p1, p2) => p1 > p2);

console.log(sortedAndFiltered.join(', '));






