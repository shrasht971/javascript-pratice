//The for of loop is used to iterate over the iterateable objects like arrays, strings, maps, sets, etc. It is allowe to access each element directly without use of index.
//Syntax:
//for(variable of iterable){
//     code block to be executed
//}
//Exmaple:
/* let arr = [1,2,3,4,5];
    for(let val of arr){
        console.log(val);
    }*/
//Output:
//1
//2
//3
//4
//5

let arr1="shrashti";
let size =0;
for(let i of arr1){
size++;
   console.log("i =", i);
}
console.log("Size =", size);
//output:8