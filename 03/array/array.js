let product1 = 'orange';
let product2 = 'milk';
let product3 = 'bread';
let product4 = 'meat';

let products = [product1, product2, product3, product4];
let anotherArr = ["Max", "Leone", "Jhon"];
let arrData = ['first value in array', 123, false, true, [1,2,3], product1, anotherArr];
console.log(arrData);

console.log(`Arr index data ${arrData.length} data ${arrData[6][2]}`);

window.onload = function(){
    let [...liElements] = document.querySelectorAll('li');
    console.log(liElements);
    for (let i = 0; i < liElements.length; i++){
        liElements[i].innerHTML = `New value ${i}`;
    }
}

let arrConstructor = new Array(100);


// arrConstructor[50] = 1;
// arrConstructor[60] = 2;
// arrConstructor[70] = 3;
console.log(arrConstructor);


let hardArray = [
    ['John', 20],
    ['Leo', 24],
    ['Bob', 29]
]
for(let i = 0; i < hardArray.length; i++){
    console.log(`hardArray ${hardArray[i]}`);
    for(let j = 0; j < hardArray.length; j++){
        console.log(`Inner array Name is ${hardArray[i][0]} and age is ${hardArray[i][1]}`);
    }
}

for(let i = 0; i < arrConstructor.length; i++){
    arrConstructor[i] = `Item valeu ${i}`;
}
console.log(arrConstructor);
