//strings
console.log('Hello world');

// String concatenation
let firstName = "Belen";
let lastName = "Delgado";

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters  -- the characters start at 0. 
// choosing 1 will display letter 'e' from Belen.
console.log(fullName[1]);

// string length 
// counts the amount of characters in the string
console.log(fullName.length);

// string methods
// to upper case will change everything to upper case  --because it's a method add () at the end.
console.log(fullName.toUpperCase()); 

// toLowerCase()
let result = fullName.toLowerCase();
console.log(result);
console.log(result, fullName); // result will not interfere with fullName. Displays belen delgado Belen Delgado

// Finds the index of '@' and returns the character
// Argument/parameter when you pass a value in the paranthesis.
let email = 'helloworld@example.com';
let index = email.indexOf('@');
console.log(index); // displays 10

// last index of  --will find the position of the last character 'p'
// this will display the 15th character of the email address helloworld@example.com
let indexResult = email.lastIndexOf('p');
console.log(indexResult); // displays 15

// slice will slice at the position 10 starting at 0.
// first arguement is where we start from second arguement is where we go to.
let sliceResult = email.slice(0,9);
console.log(sliceResult); // displays helloworl

// Substring will only display what we select unlike slice.
// first arguement is start from position 0
// the seoncnd arguement is how many characters we want to display.
let subResult = email.substr(4,10); 
console.log(subResult); //displays oworld@exa

// Replaces a certain character in the string with another character.
let replaceResult = email.replace('l','w')
console.log(replaceResult);
