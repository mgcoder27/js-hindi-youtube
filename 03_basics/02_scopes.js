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



