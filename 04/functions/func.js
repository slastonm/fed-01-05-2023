
function functionName(argument){
    console.log(`Call function ${argument}`);
}

// let functionName = function(value){
//     console.log(`Call function second variatn ${value}`);
// }

// functionName("Hello");
// functionName("World");
// functionName("Function");
// functionName("Function2");
for(let i =0; i<5; i++) {
    functionName(i);
}

let userName = "";

function getData(){
    userName = prompt("Type your name");
}
function readData(){
    console.log(`User name ${userName}`);
}
// getData();
// readData();

function summValue(a=2,b=2){
    console.log(arguments);
    console.log(a+b); 
    return a+b;

}
summValue(2,3,4,5,6);
let prices = [100, 200, 500, 400];
// function calculateSale(price, dicscount ){
    
// };

summValue();
let calcSumm = summValue(10);
console.log(calcSumm);

function writeData(){
    console.log(`Sum value is ${summValue()}`);
}
writeData();

function doubleNumber(number){
    return number*2;
}

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
function modifyArr(array, callbackFn){
    let modifyArrayValue =[];
    for(let i = 0; i < array.length; i++){
        modifyArrayValue.push(callbackFn(array[i]));
    }
    return modifyArrayValue;
}
let firstCallFn = modifyArr(checkArr, doubleNumber);
console.log(`First callback example ${firstCallFn}`);
console.log(`Second callback example ${modifyArr([1,2,3], doubleNumber)}`);

let globalVariable = 'GlobalVariable';

for(let i = 0; i <3; i++) {
    let localVariable = 'LocalVariable';
    console.log(`${globalVariable + i}`);
}

function areaView(){
    let localVariable = 'LocalVariable';
    // console.log(innerFnVariables);

    function innerFn(){
        let innerFnVariables = 'innerFnVariables';
        console.log(localVariable);
    }
    innerFn();
}
areaView();

// let arroFn = (a)=>a*2;
let arroFn = (a)=>{
    if(a>1){
        return a*2
    }
    
};

console.log(`Arrow function ${arroFn(3)}`);

let arr = [18, 20, 24];

function checkAge(age){
    return age > 19;
}

// let res = arr.filter((age)=>{return age > 19});
let res = arr.filter(checkAge);

console.log(res);

let anSortArr = [1,2, 10, 22, 30];
// console.log(anSortArr.sort());
// console.log(anSortArr.sort(function(a,b){return a-b}));
console.log(anSortArr.sort((a,b)=>{return a-b}));
// console.log(anSortArr.sort(function(a,b){return b - a}));


