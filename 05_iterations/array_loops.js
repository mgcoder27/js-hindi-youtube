// for of

const arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
    
}

// MAPS

const map = new Map();
map.set('IN',"India");
map.set('Fr',"France");
map.set('USA',"United States of America");

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
    
}

// for-in

const obj = {
    JS: "JavaScript",
    Cpp: "C++",
    rb: "Ruby",
    swift: "Swift By Apple"
}

for(const key in obj){
    console.log(`${key} is shortcut for ${obj[key]}`);
    
}


// for-each
const pokemon = ["Pikachu","Bulbasaur","Charizard","Arceus","Mewtwo"];

// pokemon.forEach( function(val){
//     console.log(val);
    
// })

// pokemon.forEach((key) => {
//     console.log(key);
    
// })

// function print(item){
//     console.log(item);
    
// }

// pokemon.forEach(print);

// pokemon.forEach((key,index,arr) =>{
//     console.log(key,index,arr);
    
// })

const coding = [
    {
        language:"JavaScript",
        languagfilename:"js"
    },
    {
        language:"Java",
        languagfilename:"java"
    },
    {
        language:"Python",
        languagfilename:"py"
    }
]

coding.forEach((item) =>{
    console.log(item.languagfilename);
    
})