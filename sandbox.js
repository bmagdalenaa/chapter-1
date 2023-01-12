/* strings */
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
console.log(replaceResult); // displays hewloworld@example.com   --only replaces first letter found


/* Numbers */
// Order of operations BEDMAS
// ** two stars means the power of
// ++ adds one
// -- minues one
// += or -=  or *= or /= for the full equation 
// eg. from above: likes = 10 ... likes - 1 =9 ... likes -= 2 would display 8.;
// NaN means not a number .. would display if console.log(5 / 'hello') or any other equation is incompatible
let mathResult = 5 * (10-3) ** 2;
console.log(mathResult);

let score = '100';
//console.log(score + 1); // displays 1001
score = Number(score); // forces score to become a number
console.log(score + 1); // displays 101
console.log(typeof score); //displays number ... comment out line 68 and it displays string instead.

/* If you try and turn something into a number that isn't, NaN will display
eg. let result = Number('hello');
console.log(result);    displays NaN
Reverse can be done with a string. 
let result = String(50);
eg. console.log(result, typeof result);     displays string.... use typeof to see datatype
Boolean() can also be used*/

/* arrays */
//positions starts at 0
// stores collection of data
let ninjas = ['im', 'so', 'bored'];
//console.log(ninjas[1]);     --displays 'so'
//console.log(ninjas);      --displays ['im', 'so', 'bored']

// to override a position in the array
ninjas[1] = 'very';
//console.log(ninjas); // displays ['im', 'very', 'bored']
//console.log(ninjas[1]); // displays very
//console.log(ninjas.length); // displays the elements length which is 3

let joinResult = ninjas.join(','); //join: elements inside aray into a single string and it joins them with commas
//console.log(joinResult); //im,very,bored
let iResult = ninjas.indexOf('bored');
//console.log(iResult); //displays 2 for the position

let addResult = ninjas.concat('really', 'very'); // adds to the array
//console.log(addResult); //displays ['im', 'very', 'bored', 'really', 'very']

let pResult = ninjas.push('cool'); // alters the original value of the array
console.log(ninjas); //displays ['im', 'very', 'bored', 'cool']
console.log(pResult); //displays 4 .. returns the length of the new array

let popResult = ninjas.pop(); // Takes off the end values so it just adds cool
console.log(popResult); // displays 'cool'
console.log(ninjas); // displays ['im', 'very', 'bored'] after using pop()

/* Booleans and comparisons */
// Not the same thing. Yellow is a string
console.log(true, false, 'true', 'false')

let boolEmail = 'fakeemail@boolemail.com';
//let boolresult = email.includes('@'); // returns true because 'fakeemail@boolemail.com' has '@'
let names = ['mario', 'luigi', 'toad'];
let boolresult = names.includes('bowswer'); // returns false.. bowser is not in the array
console.log(boolresult);

