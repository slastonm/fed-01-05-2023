const key = Symbol('0');
const key2 = Symbol('0');
console.log(key);
const myObj = {};
myObj[key] = 'value';

let users = [
    {name   : 'John', id : 10},
    {name   : 'John2', id : 10}
]

console.log(myObj[Symbol('0')]);
console.log(myObj[key2]);


const cars = ['ford value', 'fiat value', 'toyota value'];

//old way
// const ford = cars[0];
// const fiat = cars[1];
// const toyota = cars[2];

const [ford, fiat, toyota] = cars;

console.log(ford);

const hero  ={
    heroName: 'Batman',
    realName: 'Bruce',
    // suitColor: 'red',
    skills : [
        'Fly',
        'Run'
    ]
};

// console.log(hero.realName);

const {heroName, realName, suitColor = 'black', skills}  = hero;
console.log(hero);
console.log(suitColor);

const heroes = [
    {heroName: 'Batman'},
    {heroName: 'Superman'}
]

for(const {heroName} of heroes) {
    console.log(heroName);
}


const heroeInfo = heroes.map(function({heroName}) {
    return `This is ${heroName}`;
});

console.log(heroeInfo);
