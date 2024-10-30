/*//Create a variable, message, that stores the string:"You have tree new notifications"
let message="You have tree new notifications"
// console.log(message)
let username="per"
//concentated two string with space
//console.log(message+", "+username +"!")
//Create a variable, messageToUser, that contains the message we have logged
messageToUser=message+", "+username+"!"
console.log(messageToUser)*/
/*Create two variables, name and greeting. The name variable should store your name,
and the greeting should store e.g. "Hi, my name is "
Create a third variable, myGreeting, that contatenates the two strings
Log myGreeting to the console*/
// let name="Shrashti"
// let greeting= "Hi, my name is "
// let MyGreeting = greeting + name
// console.log(MyGreeting) 
/*Grab the welcome-el paaragraph and store it in a variable called welcomeEl
Create two varaiables(name& greeting) that contains your name
and the greeting we want to render on the page
Render the welcome message using welcomeEl.innerText*/
let welcomeEl=document.getElementById("welcome-el")
let name="Shrashti"
let greeting="Hi! My name is" 
welcomeEl.innerText=greeting+ " "+name 
