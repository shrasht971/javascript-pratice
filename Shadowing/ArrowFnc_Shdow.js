//Q7. Shadowing in Arrow Function
//Write a global variable message = "Hello, world", then declare an arrow function where you shadow message with "Hi there" and log it.
var message = "Hello, world";

const greet = () => {
    let message = "Hi there";
    console.log("Inside function: ", message);
};

greet()

console.log("Outer variable: ", message);