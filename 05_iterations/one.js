/*****************************************LOOPS ****************************************************/

// FOR Loop


// for(let i = 0; i<10; i++){
//     const element = i;
//     console.log(element);
    
// }

// for(let i=1; i<=10; i++){
//     // console.log(`Outer loop value : ${i}`);
//     for(let j=1; j<=10; j++){
//         // console.log(`Inner loop value : ${j} which is inside the outer loop of ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
//     console.log("\n");
    
// }

const myarr = [2,4,6,8,10,12,14,15,16,18,19];

for(let index = 0; index<myarr.length; index++){
    const val = myarr[index];
    console.log(val);
    
}

// Break and continue
for(let index = 1; index<myarr.length; index++){
    const val = myarr[index];
    if(val==16) {
        console.log(`----Value ${val} detected-----`);
        
        break;
    }
    if(val%3==0) continue;
    console.log(`Value of current index is ${val}`);
}