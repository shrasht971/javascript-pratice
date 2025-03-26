//The for...in loop in JavaScript is used to iterate over the enumerable properties (keys) of an object. It can also be used with arrays, but it's generally recommended for objects.
const person = {
    name: 'Shrashti',
    age:22,
    Gender: 'Female'
};
for(let key in person){
    //console.log(`${key}: ${person[key]}`);
    console.log("key:",key, ",", "value: ",person[key])
}