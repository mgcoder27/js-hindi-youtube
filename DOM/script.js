// let element = document.body.childNodes[1];
// console.log(element);

// element.firstElementChild.style.backgroundColor = "red";
// element.children[1].style.backgroundColor = "green";

// console.log(element.children[1].nextElementSibling);
// console.log(element.children[2].previousElementSibling);

document.getElementById("box1").style.backgroundColor = "blue";
// document.getElementsByClassName("box").style.color = "green";
document.getElementById("box2").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "red"; // iski help se jo bhi pehla element jiski class box hai usse macth hota hai toh uspe kaam kr jayega yeh sirf ek par kaam krega

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"; // sare elements hogye
    
})