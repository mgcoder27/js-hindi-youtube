let a = 100 // here a is a global scope variable
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(`The value of inner a is : ${a}`); // Here a is a local scope variable
    
}

// console.log(a);
// console.log(b);
console.log(c);
console.log(a);


// var yahan par if statementke andar hai fir bhi acccessible hai isliye var ka use nhi kiya jata hai

function one(){
    const username = "manu_garg16"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // yahan par website variable ko two() function se liya gya hai isliye woh accessible nhi hai kyunki yeh variable local scope hai na ki global scope

    
    two();
}
one();

if(true){
    const username = "coder27"
    if(username==="coder27"){
        const website = " Leetcode"
        console.log(username + website);
        
    }
    //console.log(website); // local variable
    
}

// console.log(username);
// Local variable

console.log(addone(5));
function addone(num1){
    return num1+1;
}

addtwo(6); // yahan par hum initialization se pehle access nhi kr skte kyunki neeche humne declaration ke sath sath use variable mein hold bhi kr diya hai
const addtwo = function(num2){
    return num2+2;
}


