console.log(10%2);
console.log("5%3",5%3);
console.log("4%2",4%2);
console.log("1%2",1%2);

// ctl + d 

let postIncrement = 0;
console.log(postIncrement); // 0
console.log(postIncrement++); // 0
console.log(postIncrement); // 1
console.log(postIncrement++);
console.log(postIncrement);
console.log(postIncrement++);
console.log(postIncrement);

console.log('--------------------------------');

let prefIncrement = 0;
console.log(prefIncrement); //0
console.log(++prefIncrement); // 1
console.log(prefIncrement); //1
console.log(++prefIncrement); //2
console.log(prefIncrement);
console.log(++prefIncrement);
console.log(prefIncrement);


console.log('--------------------------------');

let postDecrement = 10;
console.log(postDecrement); // 0
console.log(postDecrement--); // 0
console.log(postDecrement); // 1
console.log(postDecrement--);
console.log(postDecrement);
console.log(postDecrement--);
console.log(postDecrement);

console.log('--------------------------------');

let prefDecrement = 10;
console.log(prefDecrement); // 0
console.log(--prefDecrement); // 0
console.log(prefDecrement); // 1
console.log(--prefDecrement);
console.log(prefDecrement);
console.log(--prefDecrement);
console.log(prefDecrement);

console.log('--------------------------------');

let a = 2;
a = a +2;//  a+=2 a* = 3; a/=2; a-=1;
console.log(a);
