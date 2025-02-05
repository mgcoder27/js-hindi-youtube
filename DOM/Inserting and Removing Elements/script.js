document.querySelector(".box").innerHTML = "Hello Manu Garg";
console.log(document.querySelector(".box").hasAttribute("data-createdby"));
document.designMode = "on";
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", "<b> Hello NITIAN Manu Garg</b>");