let oneLinerJoke = require('one-liner-joke');
let joke = () => {
  let joke = oneLinerJoke.getRandomJoke();
  return joke.body;
}
console.log(joke());




let funnyWords = require('funny-words'); 

const printFunnyWords = (word) => {
  console.log(funnyWords(word));
}

const word = 'funnyWords';
printFunnyWords(word);





let figlet = require('figlet');
 
figlet('Hello World!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});



let figlet = require('figlet');

console.log(figlet.textSync('Hello World', {
    font: 'slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));


// let figlet = require('figlet');

// figlet.fonts(function(err, fonts) {
//     if (err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });



let cowsay = require('cowsay');

console.log(cowsay.say({
	text : "I'm a cow",
	e : "OO",
	T : "U "
}));


