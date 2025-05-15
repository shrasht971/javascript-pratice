//Nested Function Shadowing
//Create a function outer() that declares a variable msg = "Outer message", and an inner function inner() that declares msg = "Inner message". Log the msg inside inner() and outside it.



function outer(){
    let msg = "Outer message";
    function inner(){
        let msg = "Inner message";
        console.log(msg);
    }
    inner();
    console.log(msg);
}
outer();