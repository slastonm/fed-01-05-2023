let div1 = 'div1';
let div2 = 'div2';
let div3 = 'div3';
let div4 = 'div4';

// DRY - don'r repeat yourself

let count = 0;

while (count < 10) {
    count++;
    if(count % 2 === 0){
        continue;
    }
    // if(count === 4){
    //     break;
    // }
    console.log(`Count value ${count}`);

}

let  summValue = 0;
let doCount = 0;
do{
    console.log(`${summValue+=doCount}`);
    doCount++;
}
while (doCount < 3);

for(let i = 0; i < 5; i++) {
    console.log(`For loop ${i}`);
}



console.log(`Create div class card  1`);
console.log(`Create 2 div inside card 1`);
console.log(`Create 2 div inside card 2`);

console.log(`Create div class card  1`);
console.log(`Create 2 div inside card 1`);
console.log(`Create 2 div inside card 2`);

console.log(`Create div class card  1`);
console.log(`Create 2 div inside card 1`);
console.log(`Create 2 div inside card 2`);



for(let i = 0; i < 3; i++) {
    console.log(`Create div class card  ${i}`);
    for(let j = 0; j<2; j++) {
        console.log(`Create 2 div inside card ${j}`);
    }  
}