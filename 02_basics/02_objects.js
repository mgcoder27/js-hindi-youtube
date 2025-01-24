// Nesting of objects

const regularUser = {
    email: "manugarg1602@gmail.com",
    fullName:{
        userfullname:{
            firstname:"Manu",
            lastname:"Garg"
        }
    }
}

console.log(regularUser.fullName.userfullname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj4 = {5 : "a", 6 : "b"};

//const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const instauser = {
    username : "manu_garg16",
    email : "manugarg1602@gmail.com",
    followers: 300,
    following: 256
}

console.log(instauser);
console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));

console.log(instauser.hasOwnProperty('email')); // boolean

const {username : name} = instauser; // isko likhne se har baar pura instauser.username likhne ki jarurat nhi hai

console.log(name);


// {
//     "name" : "Manu",
//     "age": 18,
//     "email": "manugarg1602@gmail.com"
//      "location": "Bhopal"
// }

// This is JSON. JSON is nothing but an object which has no name