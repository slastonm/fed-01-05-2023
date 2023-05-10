let obj = {
    age: 20
};

let arrData = [
    ['Bob', 182, 77]
]
let character = {
    name: "Obi-Wan Kenobi",
	height: 182,
    mass: 77,
	hair_color: "auburn, white",
	skin_color: "fair",
	eye_color: "blue-gray",
	birth_year: "57BBY",
	gender: "male",
    films:[
        "https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/4/",
		"https://swapi.dev/api/films/5/",
		"https://swapi.dev/api/films/6/"
    ],
    skills:{
        strength: 100,
        wisdom: 100
    }
}

console.log(obj.age);
console.log(character.birth_year);
console.log(character.films[3]);
console.log(character.skills.wisdom);

let dog = new Object();
dog.nickName = "Dog";
dog['age'] = 10;
dog.voice = function(){console.log('Gav gav');}
dog.voice();
console.log(dog);

let moreDogObj = {
    nickName:'Spike',
    parents:{
        father: 'Rex',
        mother: 'Rexi'
    }
}

console.log(`My dog is ${moreDogObj.nickName} and his father is ${moreDogObj.parents.father} and his mother is ${moreDogObj.parents.mother}`);

let animals = [dog, moreDogObj];

for(let i =0; i < animals.length; i++) {
    console.log(`Obj nickname: ${animals[i].nickName} `);
}

