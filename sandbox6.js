/***** Query Selector ******/
// const para = document.querySelector('.error') // A method used for searching and returning the very first element w/in the doc that matches the given selector.
// const para = document.querySelector('div.error') // gets div class="error"
// console.log(para);
//grab multiple elements
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// for each can be used on node lists
// paras.forEach(para => {
//     console.log(para);
// });
// console.log(paras[2]);
//console.log(errors);


/******** Selector Methods ********/
/* get an element by ID */
// const title = document.getElementById('page-title');
// console.log(title);

/* get elements by their class name */
// dont need to do .error because it is implied in the class name.
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// for each cannot be used with a function
// errors.foreach(error => {
//     console.log(error);
// })

/* get elements by their tag name */
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


/**** Change text inside elements & HTML inside elements ****/
//const para = document.querySelector('p');

// innerText is not a method, it is a property
// Gets the inner text of the element
// console.log(para.innerText);
// Now to update the inner text
//para.innerText = 'Belen is awesome';
//To add to the inner text use:
// para.innerText += ' Belen is awesome!';
// Change several texts at once
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     //now to update the inner text... this will add onto each p element
//     para.innerText += ' Some new text';
// });

/**** Grab HTML and change it ****/
// const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML = '<h2>This is a new h2 </h2>'; // replaced <p>Some interesting content</p> to append use += 

/**** Add array with for each and replace inner HTML ****/
// const people = ['Mario', 'Luigi', 'Yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

/**** Get an attribute ****/
//const link = document.querySelector('a');
//console.log(link.getAttribute('href'));

//If you want to change the attribute
//the first argument is what you want to change, the second is what you want replace with
//link.setAttribute('href', 'https://www.thenetninja.co.uk')
// change the a tag text in html using link.innerText
//link.innerText = 'The Net Ninja Website';

// changes the class in html body
//const mssg = document.querySelector('p');
//console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class', 'success');
// set to attribute that doesnt exist
//mssg.setAttribute('style', 'color:pink;');

/**** Styling attributes ****/
// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');   ... this overrides the predefined style in the html h1
// To add or remove styles to the existing tag
// console.log(title.style);
// console.log(title.style.color);
//this is the best option to ADD the style onto the existing
// title.style.margin = '50px';
// change color style
// title.style.color = 'crimson';
// title.style.fontSize = '50px';

// to delete the style
// title.style.margin = '';

/***** get classes that the element has****/
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error'); // becomes <p class="error">
// content.classList.remove('error'); // becomes <p class="">
// content.classList.add('success'); // becomes <p class="success">

/********** Challenge 
 Query all the elements and then cycle through them and to give any tag a class of 
 error where error is insde the text. Give any tag a class of success where success
 is inside the text. ***********/
//step 1 get the reference
 const paras = document.querySelectorAll('p');
 //console.log(paras.innerText);

 // cycle through each paragraph to find out if it is success or error
 // textContent is better than innerText
 paras.forEach(p =>{
    if(p.textContent.includes('error'))
    {
        p.classList.add('error');
    }
    if(p.innerText.includes('success'))
    {
        p.classList.add('success');
    }
 });

 // The toggle method toggles between hide() and show() for the selected elements.
 // This method checks the selected elements for visibility.
 // show() is run if an element is hiddent
 // hide() is run if an element is visible - This creates a toggle effect
 const title = document.querySelector('.title');
 title.classList.toggle('test');