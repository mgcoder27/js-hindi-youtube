const marvel_heroes = ["Thor","IronMan","SpiderMan"];
const dc_heroes = ["SuperMan","BatMan","AquaMan"];

console.log(marvel_heroes);
let all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

// Ek aur tarika hota hai ese krne ka
let all_new_heroes = [...marvel_heroes, ...dc_heroes]; // iss tarike se aur values ko bhi access kr skte hain
console.log(all_new_heroes); 

const arr = [1,2,[3,4],5,[6,[7,8],9]];
const arr2 = arr.flat(4);
console.log(arr2);

