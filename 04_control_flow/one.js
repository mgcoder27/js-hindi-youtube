// Control flow mein hum basically conditional statements ke baare mein study krenge

const balance = 1000;
if(balance<500){
    console.log(`Your balance is less than 500`);
    
}
else{
    console.log(`Your balance is greater than 500`);
    
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
    
}
