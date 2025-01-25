function sayMyName(){
    console.log('M');
    console.log('A');
    console.log('N');
    console.log('U');
}

sayMyName();

// function addnumbers(number1, number2, number3){ // these are called as parameters
//     console.log(number1+number2+number3);
    
// }
function addnumbers(number1, number2, number3){
    let result = number1 + number2 + number3;
    return result;
}
const ans = addnumbers(3,4,9); // these numbers are called as arguments

console.log(`The addition of 3, 4 and 9 is ${ans}`);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // yahan par koi bhi argument pass nhi hua hai isliye yeh undefined answer dega lekin null nhi dega

function calculateCarPrice(...num1){ // yahan par three dots ki wajah se yeh rest operator ban gya
    return num1;
}

console.log(200,300,400);

const user = {
    username : "mgcoder27",
    email : "mgarg2790@gmail.com"
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} & his email is ${anyobject.email}`);
    
}
//handleobject(user);

// dusra tarika
handleobject({
    username:"mgcoder27",
    email: "manugarg1602@gmail.com"
})

// Function in Arrays

const arr = [100,300,500,700,900];

function returnvalue(arr1){
    return arr1[3];
}

console.log(returnvalue(arr));
