let itemsHtml = '';
let people = [{
    name: 'Doncho Minkov',
    nickname: 'The JS Master'
},{
    name: 'Peter Ivanov',
    nickname: 'The student'
},{
    name: 'Mariika Ivanova',
    nickname: 'the Mother of all'
}];
for(let person of people){
    itemsHtml += `<li>${person.name} is also known as ${person.nickname}</li>`;    
}


let listHtml = `<ul>${itemsHtml}</ul>`; 

console.log(listHtml);