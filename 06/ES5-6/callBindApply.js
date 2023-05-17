const user = {
    username: 'John',
    age:100
}

function sayHello(){
    console.log(`Hello ${this.username}`);
}

sayHello();

sayHello.call(user);

function multipleHello(message, gift) {
    console.log(this);
    console.log(`Say ${this.username} ${message} about ${gift}`);
}

multipleHello.apply(user, ['message text', 'gift value']);

function summNumber(a,b){
    return a + b;
}

const addFive = summNumber.bind(null, 5);
console.log(addFive(2));








