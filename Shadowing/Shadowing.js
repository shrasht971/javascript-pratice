//Shadowing is that when a variable in an inner(local) scope has the same name as a variable in ana outer(global or parent) scope. The inner variable "shadows" (hides) the outer variable in that scope.
 
let name ="shrashti"; //global variable

function show(){
    let name ="sahu"; //inner variable shadows outer 
    console.log(name);//outer: sahu
}

show();
console.log(name);