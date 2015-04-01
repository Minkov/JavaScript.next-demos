let wordsCount = new Map();
let text = 'Telerik Academy Plus plus JS is JS.next and JS.next is a cool thing';

let words = text.split(/[. ]/);


words.forEach(word =>{    
    word = word.toLowerCase();
    var count = wordsCount.has(word)?wordsCount.get(word):0;
    wordsCount.set(word, count+1);
});


for(let [word, count] of wordsCount){
    console.log(`${word} is found ${count} times`);
}