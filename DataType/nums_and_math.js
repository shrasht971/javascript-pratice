const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(6));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //toLocalString() method split into comma according to the US standard
// console.log(hundreds.toLocaleString('en-IN'));//By default US Standard convert into Indian standard


