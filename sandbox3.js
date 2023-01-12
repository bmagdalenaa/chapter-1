/* For loops */
// i starts the counter at 0 - initialization variable
// loops < 5 times  - the condition.. true or false
// i++ adds one each time
// for(let i = 0; i < 5; i++){
//     console.log('in loop: ', i);
// }
// console.log('loop finished');

//If you don't know how many names in the loop, use length to get the legnth of the array.
//const names = ['shaun','mario','luigi'];
// cycling through an array/loop is called an iteration. 
// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]); // displays in order
//     let html = `<div>${names[i]}</div>`; // use ` not '
//     console.log(html); //displays each name fr array with div
// } 

/* while loop*/
// let i = 0;
// while(i < 5){
//     console.log('in loop: ', i);
//     i++; // add i++ to ensure you are not stuck in an infinite loop
// }

/*do while loops*/
// let i = 3;
// do{
//     console.log('value of i is: ', i);
//     i++;
// }while(i < 5); 

/* if statements */
// const age = 22;
// if(age > 20){
// console.log('you are over 20 years old');
// }

// const ninjas = ['shaun','mario','luigi', 'yoshi'];
// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas!");
// }

/* else-if statements  & logical operators*/
// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('password is mighty strong!');
// }else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('password is long enough');
// }else{
//     console.log('password is not long enough');
// }

/* Functions: Defines a block of code that we can call at any point. */
// function declaration
// function greet(){
// console.log('hello there!');
// }
//greet();

// function expression: when we store a function within a variable
// expressions should always have a semicolon.
// const speak = function(){
//     console.log('good day!');
// };
//greet();
// speak();

// aruguements & parameters
// const speak = function(name, time){
//  console.log(`good day ${name}!`); // must use `
// };

// speak('Belen', 'morning');

// regular function
// const calcArea = function(radius){
    //let area = 3.14 * radius ** 2;
    // Do not use console.log within the function or you will not be able to display the answer outside of the block.
    // console.log(area);
    // use return to store and use it later
    //return area;
    // better to use return statement with equation
//     return 3.14 * radius ** 2;
// };

// const a = calcArea(5);
// console.log(a);

// const calcVol = function(a){
// };

/* arrow function */
// const calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// };

// if it is only one parameter, no need to use ()
// const calcArea = radius => 3.14 * radius ** 2;
// const area = calcArea(5);
// console.log('area is', area);

// const bill = function (products, tax)
// {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// arrow function version of the above code. 
// const bill = (products, tax) =>
// {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

/* callbacks & foreach */
// callback functions are when you pass in a callback function in a function.
// example 1
// const myFunc = (callbackFunc) =>{
//     //do smething
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     //do something
//     console.log(value);
// });

//example 2: built-in array method
// let ppl = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// foreach method that iterates throught the array
// ppl.forEach(function(person){
//     console.log(person); // displays each persons name
// });
// simplified version of ex 2
// ppl.forEach(person =>{
//     console.log(person); // displays the same as above
// });
//example 3
// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
// ppl.forEach(logPerson);

//example 4
const ul = document.querySelector('.ppl'); // ul for html file
const ppl = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;

ppl.forEach(person =>{
    //create an html template for each person
    html += `<li style="color: purple">${person}</li>`; 
});
console.log(html);
ul.innerHTML = html; // to display on html file.

