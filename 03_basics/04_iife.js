// Immediately Invoked Function Expression

(function hello(){
    // named IIFE
    console.log("DataBase Connected");
    
})(); // without this semicolon IIFE does not know when to end the function
// Above expression is said to be immediately invoked function expression

( (name) =>{
    console.log(`Database Connected Two ${name}`);
    
})("Manu");