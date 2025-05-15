// Q4. Shadowing with Function Parameters
//Write a function display(name) where the parameter name shadows a global variable name = "Shrashti". Log the value of name inside and outside the function.
let name="Shrashti"
function display(name){
  console.log("Inside Function:",name);
}
display("Sahu");
console.log("Outside function:",name);