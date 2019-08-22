/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global/Window binding -If you don't specify, 'this' points to the window in global scope.
 * 2. Implicit binding - When you call a function on an object 'this' refers to the object before the dot.
 * 3. "New" binding - When using constructor functions 'this' refers to the new instance of the object created by the constructor function
 * 4. Explicit binding - When you use the call or apply method is JS 'this' is explicit defined. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// function myFunction(month) {
//     console.log(this);
//     return month;
// }

// myFunction('August');

// // Principle 2

// // code example for Implicit Binding
// const myObject = {
//     name: 'Zanai',
//     age: 2,
//     greeting: "Hello",
//     speak: function(name) {
//         console.log(`${this.greeting} my name is ${this.name} and I am ${this.age} years old!`);

//     }
// }

// myObject.speak();

// Principle 3

// code example for New Binding

function Clerk(greeting) {
    this.saying = greeting;
}

let storeClerk = new Clerk('Welcome, how can I help you?');

console.log(storeClerk.saying);


// Principle 4

function clerk() {
    console.log(this.saying);
}

let bankClerk = {
    name: 'Tommy',
    saying: 'I hate my job'
}

clerk.call(bankClerk);