let value = new Date().getFullYear();
console.log(typeof value == 'boolean', 'type of value');

console.log(typeof value, 'type of value');

console.log(typeof undefined, 'type of undefined');
console.log(typeof null, 'type of null');
console.log(typeof true, 'type of boolean');
console.log(typeof false, 'type of boolean');
console.log(typeof '', 'type of string');
console.log(typeof 'dfasfdasf', 'type of string');
console.log(typeof `dfasfdasf ${value+10}`, 'type of string');
console.log(typeof {a:3}, 'type of obj');
console.log(typeof [1,2,3], 'type of array'); // Array.isArray([1,2,4])
console.log(typeof new Date(), 'type of Date');
console.log(typeof /regex/, 'type of regex'); // regex

console.log(typeof function(){}, 'type of function'); // function
console.log(typeof class C{}, 'type of Class'); // function

const sym = Symbol();
console.log(typeof sym, 'type of symbol'); 

console.log(typeof NaN, 'type of NaN'); 

let arr = ['1', 23, {a: 1}, true, NaN, false, null]










