//  this keyword refer the current context.This keyword only use in context not use in function
const user ={
    username: "Shrashti",
    price:999,
    
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);  show all access the current context
        
    }
}
// user.welcomeMessage()
// user.username = "shri"
// user.welcomeMessage()

// console.log(this);   but outside the function use this keyword show empty object

function info(){
    let username = "shrashti"
    console.log(this.username);
}

info()