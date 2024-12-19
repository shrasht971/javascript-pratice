//what is ternary operator.
//Ternary operator is a shorthand for the if-else conditional statement in javascrip. you can write to conditional expression in a single line.
//condition? expressionIfTrue: expressionIfFalse ;
//condition: The condition to evaluate.
//expressionIfTrue: The code to execute if the condition is true.
//expressionIfFalse: The code to execute if the condition is false.


//Check age that the person can do vote or not using a ternary operator.
let age=25;
let status= (age>18)?'I can vote':'I can not vote';
console.log(status);

let age1=5;
let status1= (age>18)?'I can vote':'I can not vote';
console.log(status1);

//Check if a number is even or odd using a ternary operator.
let number = 5;
const result = (number%2===0)? 'Even' : 'Odd' ;
console.log(`The number ${number} is ${result}`);