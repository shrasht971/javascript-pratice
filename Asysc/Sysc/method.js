const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);  // [1, 4, 9, 16, 25]
const evens = numbers.filter(num => num % 2 === 0);  // [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0);  // 15

console.log(squared);
console.log(evens);
console.log(sum);


