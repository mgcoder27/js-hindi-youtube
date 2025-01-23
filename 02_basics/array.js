// Array

const arr1 = [1,3,5,7,9];
const heroes = ["Shaktiman","Krish"];

const arr2 = new Array(0,2,4,6,8);
console.log(arr1[0]);

// Array Methods
arr1.push(11); // in Javacript, array is resizable
console.log(arr1);
arr2.pop(); // in Javascript, remove the last element of the array  
console.log(arr2);

arr1.shift(); // shift the first value of an array
console.log(arr1);

console.log(arr1.includes(9)); // boolean method
console.log(arr1.indexOf(7));

const arr3 = arr2.join(); // this method makes an array to string but original array will same as earlier
console.log(arr3);
console.log(typeof arr3);

console.log("A : ",arr1);

const newarr = arr1.slice(1, 3);
console.log(newarr);
console.log("B : ",arr1);

const newarr2 = arr1.splice(1,3);
console.log(newarr2);
console.log("C : ",arr1);

// Basic difference jo slice() and splice() mein hai woh yeh hai ki slice function se original array mein koi change nhi aata hai lekin splice ki wjh se jitne part mein splice ka use kiya hai woh original array mein se hat jata hai 



