//Pratice Question
let name = "Linda"
let greeting = "Hi there"
//Create a function that logs out "Hi there, Linda!" when called
function merge()
{
   console.log(greeting + ", "+name+ "!")  
}
merge()
/*Incrementing and decrementing*/
let myPoints = 3

//Create two functions, add3Points() and remove1Point(), and have them
//add/ remove points to/from the myPoints variable
function add3Points()
{
    myPoints+=3
}
function remove1Point()
{
    myPoints -=1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()



//Call the functions to that the line below logs out 10
console.log(myPoints)