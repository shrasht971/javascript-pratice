// Q1. Block vs Function Scope Shadowing
//Write a program to demonstrate how a variable declared with let inside a block can shadow a global variable, and how it behaves differently when using var.

var a ="5";
function show(){
    let a= "6";
    console.log("Inside block:",a);
}
show()
console.log("Outside block:",a);