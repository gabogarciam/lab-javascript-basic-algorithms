// Names and Input

var hacker1 = 'Sebastian';
console.log('The driver\'s name is ',hacker1);
// var hacker2 = window.prompt('Write the navigator name');
var hacker2 = 'Gabriel';
console.log('The navigators name is '+hacker2)

//Conditionals

if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has '+hacker1.length+' characters');
} else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has '+hacker2.length+' characters');
} else {
    console.log('wow, you both got equally long names, '+hacker1.length+' characters!!');
}

// Loops

console.log('Printing all the characters of the driver\'s name, separated by a space and in capitals letters');
var aux = hacker1.toUpperCase();
var aux2 = '';
for (var i = 0; i < aux.length; i++) {
    aux2 += aux[i]+' ';    
}
console.log(aux2);

console.log('Printing all the characters of the navigator\'s name, in reverse order. ');
var reverse = '';
for (var i = hacker2.length - 1 ; i >= 0; i--) {
    reverse += hacker2[i];    
}
console.log(reverse);
// Lorem ipsum generator
