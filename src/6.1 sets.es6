let names = new Set();

names.add('Doncho');
names.add('Nikolay');
names.add('Ivaylo');
names.add('Evlogi'); 
names.add('Doncho');

names.forEach(name => console.log(name));

console.log(`names contains 'Doncho'? -> ${names.has('Doncho')}`);

names.delete('Doncho');

console.log(`names contains 'Doncho', after deletion? -> ${names.has('Doncho')}`);

console.log(`The names set contains ${names.size} names`);