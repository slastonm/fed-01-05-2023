let str = "String";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

// let srtShort = str.substring(0, 2);
let srtShort = str.substring(0, 2)

console.log(str.substring(2));


let info = 'Html and CSS and CSS';
let newText = info.replace('CSS', 'js');
console.log(newText);

let userName  = "              Firs newUser      ";

console.log(userName.length);

// let trimData = userName.trim();
let trimData = userName.trimStart();
// let trimData = userName.trimEnd();

console.log(trimData.length, `trim user name:${trimData}`);

