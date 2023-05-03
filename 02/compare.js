// == 

console.log(5=='5');
console.log(null == undefined);

// ===
console.log('----------------------------------------------------------------');
console.log(6==='6');
console.log(null === undefined);

console.log('----------------------------------------------------------------');
let a = 10;
let b = '10';
let c = 'something';
let d = "omething";
let e = true;
let f = false;

console.log('a == b', a==b); //true
console.log('a === b', a===b); //false
console.log('c == d', c==d); //true
console.log('c === d', c===d);//true
console.log('a == e', a==e); //false
console.log('a === e', a===e); //false
console.log('c == f', c==f); //false
console.log('c === f', c===f); //false

console.log('----------------------------------------------------------------');

console.log('10 != true', 10 != true); //true
console.log('10 != "10"', 10 != "10"); //true
console.log('10 !== "10"', 10 != "10"); //true
console.log('!true', !e);

// > >= < <=

console.log('----------------------------------------------------------------');
console.log('10>10',10>10);
console.log('10>=10',10>=10);
console.log('10<=10',10<=10);
console.log('10<10',10<10);

console.log('----------------------------------------------------------------');
console.log('11>10',11>10);
console.log('12>=10',10>=10);
console.log('9<=10',9<=10);
console.log('8<10',8<10);


console.log('----------------------------------------------------------------');

// логічне І (&&) => повертає true коли всі значення порівняння true

// true && true => true
// true && false => false
// false && false => false
// false && true => false

console.log(false && false && false && true);

console.log('----------------------------------------------------------------');

// логічне Чи (||) => повертає true коли одне із значення порівняння true

// true || true => true
// false || true => true
// false || false => false
// true || false => true


let compareMix = (true || false) && (false || true);

console.log('compareMix',compareMix);








