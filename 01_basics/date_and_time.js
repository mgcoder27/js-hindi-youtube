// Dates

let mydate = new Date();
console.log(mydate);
console.log(mydate.toDateString()); // Through this, I get date and day of today

console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate); // object type

let mycreateddate = new Date(2025, 1, 16, 16, 55); // last two values time ko bata rhi hain
console.log(mycreateddate.toLocaleString());


