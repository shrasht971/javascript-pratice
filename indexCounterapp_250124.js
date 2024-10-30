//intialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

// function increment(){
//     console.log("The button was clicked")
// }
// function myLogger(){
//     let lap1=34
//     let lap2=33
//     let lap3=36
//     //create a function that logs out the sum of all the lap times
//     let sum=lap1+lap2+lap3
//     console.log(sum)
// }
//create a function that increments the lapsCompleted variable with one
//Run it three times
// let lapsCompleted=0
// function lapsIncrement(){
//     lapsCompleted=lapsCompleted+1
   
// }
// lapsIncrement()
// lapsIncrement()
// lapsIncrement()
// console.log(lapsCompleted)
// //myLogger()
//intialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked(log it out)
//change the count-el in the HTML to reflect the new count
//2.Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//console.log(countEl)
let count = 0 
//console.log(saveEl)
function increment(){
count+=1
// countEl.innerText= count 
countEl.textContent= count 
}
//1.Create a function, save(),which logs out the count when it's called
function save()
{
    //3. Create a variable that contains both the count and the dash separator, i.e."12-6-7"
   let countstr = count + " - "
    //4. Render the variable in the saveEl using innerText
    //saveEl.innerText += countstr
    saveEl.textContent += countstr
    //NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent=0 
    count=0
  //  console.log(count)
  var a=3;
  console.log(a++);
  b=a+1;
  console.log(++a);
    
}





//document.getElementById("count-el").innerText=5
// let count = 0
// console.log(count)
// let add = 2+3
// console.log(add)
// let sub = 10-6
// console.log(sub)
// let mult =10*5
// console.log(mult)
// let firstBatch=5
// let secondBatch=7 
// let count =firstBatch*secondBatch
// console.log(count)
// //1.create a variable, myAge, and set its value to your age
// let myAge = 35
// //2.log the MyAge variable to the console
// console.log(myAge)
// //create two varibles,myAge and humanDogRatio
// let myAge=21
// let humanDogRatio=8
// //multiply the two together and store the result in myDogAge
// let myDogAge=myAge*humanDogRatio
// //log myDogAge to the console
// console.log(myDogAge)
// let count=5
// count=1
// console.log(count)
// let count=6
// count=count+2//*/-all use
// console.log(count)
//create a variable, bonusPoints.Initialize it as 50.Increased 100
//Decrease it down to 25,and then finally increase it to 70
//Console.log the vlue after each step
// let bonusPoints=50
// console.log(bonusPoints)
// bonusPoints=bonusPoints+50
// console.log(bonusPoints)

// bonusPoints=bonusPoints-75
// console.log(bonusPoints)
 
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)