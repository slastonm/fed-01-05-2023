function Person(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.ingo = function(){
        console.log(`${this.fName} ${this.lName}`);
    }
}
let user = new Person(
    'John','Smith', 30
);
console.log(user);


class PersonClass{
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    userInfo(){
        console.log(`${this.fName} ${this.lName}`);
    }
    static myStaticMethod(){
        console.log("Static method");
    }
    static userSecret = 'secret';
    get name(){
        return this.fName;
    }
    set setName(val){
        if(val.length < 2){
            alert(`${val} to short`);
            return;
        }
        else{
            this.fName = val;
        }
    }
}

let userClass = new PersonClass( 'John2','Smith2', 32);
console.log(userClass);
userClass.userInfo();
// userClass.myStaticMethod();
PersonClass.myStaticMethod();

console.log(userClass.userSecret);
console.log(PersonClass.userSecret);

console.log(userClass.name);
userClass.setName = 'Hello';
console.log(userClass);

class Animal{
    constructor(name){
        this.name = name;
    }
    testAnimalMethod(){
        console.log('Test Animal Method');
    }
    voice(){
        console.log(`This ${this.name} have voice gav gav`);
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed;
    }
    voice(){
        console.log(`This cat ${this.name} have voice mjau mjau`);
    }
}

let britishCat = new Cat('Tom', 'Brit');

britishCat.testAnimalMethod();
britishCat.voice();
console.log(britishCat);


