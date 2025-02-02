let element = document.body.childNodes[1];
console.log(element);

element.firstElementChild.style.backgroundColor = "red";
element.children[1].style.backgroundColor = "green";

console.log(element.children[1].nextElementSibling);
console.log(element.children[2].previousElementSibling);