const user = {
    username : "Manu",
    age : 20,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "Tanu";
// user.welcomeMessage();

// const chai = ()=>{
//     console.log(this);
// }
// chai();

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

const addTwo = (num1,num2) =>(num1+num2); // yeh ek tarika hota hai arrow function ka

console.log(addTwo(3,4));