//🔸 Q3. Loop Shadowing
//Write a program where a variable count = 100 is declared globally. Inside a for loop, declare let count = 10. Print the count inside and outside the loop.
let count =100;
for(let i =0; i<1; i++){
    let count = 10;
    console.log("Inside loop:", count);
}
console.log("Outside loop:", count);