import {Person} from './person.es6'

let person = new Person('Doncho', 'Minkov', 19);


let {fullname, age} = person
console.log(fullname, age);


let address = {
    country: 'Bulgaria',
    city: 'Burgas',
    street: {
        name: 'Aleksandrovska',
        number: 34
    }
}


let {city, street: {name: streetName}} = address;

console.log(city, streetName);



function minMax(numbers){
    return {
        min: Math.min.apply(null, numbers), 
        max: Math.max.apply(null, numbers)
    };
}


let {min, max}  = minMax([1, 2, 3, 4, -111, 5, 1, 2, 3, 1000, 3, 4]);

console.log(min, max);