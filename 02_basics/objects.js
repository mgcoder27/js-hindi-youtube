// Objects

// Object Literals
const JSUser = {
    name : "Manu",
    age : 20,
    location : "Bhopal",
    email : "manugarg1602@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}

console.log(JSUser.email);
console.log(JSUser["name"]);

JSUser.email = "mgcoder27@gmail.com" // Email has been changed
console.log(JSUser.email);
//Object.freeze(JSUser); // ab JSUser mein koi change nhi hoga

JSUser.greeting = function(){
    console.log(`Hello ${this.name}`);
    
}
console.log(JSUser.greeting());
console.log(JSUser.greeting);
