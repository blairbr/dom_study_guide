// Accessing and modifying object properties
const obj = {
	this: 'that',
	'this-thing': 'that thing',
};

const var1 = obj.this; // that
const var2 = obj['that-thing']; // this is if it has weird characters (like - or space)

obj.this = 'A new thing';

// Access array elements
const stuff = ['a', 'b', 'c'];
console.log(stuff[1]); // return second items (arrays start with 0)
// adding the end
stuff.push('d');

console.log(stuff.length); // 4
stuff.pop() // remove from end
// adding to the beginning
stuff.unshift('A');
stuff.shift(); // remove from begining
// adding in middle
stuff.splice(1, 0, "a.5"); // (where to start, how many to remove, what to insert)

// declaring functions
function addWord(word) {
    // use word
    return word; // This
}

// arrow function
const addWord = (word) => {
    // use word
    return word; // This
}
addWord("This");
addWord("That");
addWord("This & That");
 
// -- DOM -- 
const components = document.querySelectorAll(".component"); // return an array, contains all matches, use a for loop
const element = document.querySelector("#login-form"); // returns the first one, from the top of page 

// Add class 
element.classList.add('blue') // <form class="blue">
element.classList.add('red') // <form class="blue red">

// Modifying inner
element.innerHTML = "<p>Hello</p>"; // Actually creates a paragraph
element.innerText = "<p>Hello</p>"; // Includes the text with <p>

// Change Attributes
element.setAttribute('id', 'form-1') // <form id="form-1" class="blue red">
element.setAttribute('title', 'Login Form') // <form id="form-1" title="Login Form" class="blue red">

// Add element
const parent = document.querySelector('#parent'); //<div id="parent"></div>
 // add to the back
parent.append(element); //<div id="parent"><form id="form-1" title="Login Form" class="blue red"></div>
 // add to the front
parent.prepend(element);

// Remove element
parent.remove();

element.style.display = "block";
element.style.fontSize = "block"; // font-size in CSS turns into camelCase

element.addEventListener('click', function(e) {
    e.preventDefault(); // don't do what the element normally does

    console.log(e.target) // element that was clicked
    element.classList.add('clicked');
});

// add click event to multiple elements at the same time
for (let component of components ) {
    component.addEventListener('click', function() {
        console.log('clicked');
    })
}

// processing forms
element.addEventListener('submit', function(e) {
    const data = new FormData(e.target); // getting the data from the form
    data.get('username');// relates to the <input name="username" />
    data.get('password'); // relates to the <input name="password" />
});

// or 
element.addEventListener('submit', function(e) {
   const usernameInput = document.querySelector('#username');
   usernameInput.value; // .value gives you what was typed into the input
});