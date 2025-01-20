// Primitive
/* 7 types : String, Number, Boolean, null, undefined, Symbol, bigint */ 

// Reference(Non-Primitive)
// Array, Objects, Functions

const pokemon = ["Pikachu", "Charizard", "Bulbasaur"];

let myobj = {
    name: "Manu",
    age: 20,
}

const myFunc = function(){
    console.log("Hello World")
}
console.log(typeof pokemon)
console.log(typeof myFunc)

/******************************************************** MEMORY ******************************/

// Stack(Primitive), Heap(Non-Primitive)

let myUserName = "coder27"

let anotherName = myUserName

anotherName = "ManuMG"

console.log(myUserName);
console.log(anotherName);

let userOne = {
    email: "manugarg1602@gmal.com",
    upi: "manu@axl"
}

let userTwo = userOne
userTwo.email = "prateek@gmail.com"
console.log(userOne.email);

console.log(userTwo.email);
