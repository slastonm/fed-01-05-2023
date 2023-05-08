let arrayData = ['1 one',2,3,4,5,'6 six', 7, 8];
// let arrayData = [];

console.log(`First array value ${arrayData[0]} last array value ${arrayData[arrayData.length-1]} get index value by index ${arrayData[3]}`);
console.log(arrayData);
let firstArr = [1,2,3];
let secondArr = [4,5,6];

let concatArray = firstArr.concat(secondArr, 7,8,9, [10,11]);
console.log(concatArray);

let lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let stringValue = lettersArray.toString();
console.log(lettersArray.toString());

let reversArrData = arrayData.reverse();

console.log(reversArrData);

console.log(`This value is ${Array.isArray(stringValue)}`);
console.log(`This value is ${Array.isArray(reversArrData)}`);

let arrToSlice = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let from = 3;
let to =  -1;
// let sliceArr = arrToSlice.slice(3);
let sliceArr = arrToSlice.slice(from, to);
console.log(`Original value ${arrToSlice} and slice value is ${sliceArr}`);

let arrSplice = [1,2,3,4,5,6];
let spliceRes = arrSplice.splice(0,3);
console.log(`Original value ${arrSplice} and splice value is ${spliceRes}`);

// let sortValue = [1, 11, 33, 333, 40, 444, 50];
let sortValue = ['a', 'aa', 'b', 'cc', 'e', 'f', 'c'];


sortValue.sort();

console.log(sortValue);

let userValue = [];

userValue.push('milk');

userValue.push('milk2');
userValue.push('orange');
userValue.push('meat');
userValue.push('pork');


for(let i = 0; i < 5; i++){
    userValue.push(`Buy generate value ${i}`);
}
console.log(userValue);

userValue.pop();
userValue.pop();

console.log(userValue);

userValue.pop();
userValue.pop();
userValue.pop();
userValue.pop();
console.log(userValue);

userValue.shift();
console.log(userValue);
userValue.shift();
userValue.shift();
console.log(userValue);

userValue.unshift('apple');




for(let i = 0; i < 5; i++){
    userValue.unshift(`Buy generate value ${i}`);
}
console.log(userValue);



