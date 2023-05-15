let person = {
    userName: 'John',
    age: 20,
    skills: [
        'html',
        'css',
        'scss',
        'javascript'
    ]
}
for(let key in person) {
    console.log(`${key} has value ${person[key]}`);
   
    if( Array.isArray(person[key]) && person[key].length>2){
        person[key][2] ='java';
    }
}

console.log(person);
let skills = person.skills;

// for(let skill of person.skills) {
//     console.log(skill);
// }
for(let skill of skills) {
    console.log(skill);
}

let numbers = [1, 2,34, 5];

function myFn(item, index, arr){
    arr[index] = item*10;
}

// numbers.forEach(function(item, index, arr) {});
numbers.forEach(myFn);
console.log(numbers);
// [].forEach(function(item, index, arr) {});
person.skills.forEach((item, index, arr)=>{
    console.log(`User ${person.userName} has skill ${item} with index ${index} in ${arr}`);
});




let newNumbers = numbers.map((item)=>{
    return item/10;
});

console.log(`newNumbers has ${newNumbers} and number ${numbers}`);
console.log(newNumbers);
