let arr = new Array();
let obj = new Object();

console.log(arr, obj);

function ProductConsructor (productName, price){
    this.productName = productName;
    this.price = price;
    this.productInfo = function () {
        console.log(`This product ${this.productName} has price ${this.price}`);
    }
}

const TV = new ProductConsructor('TV brand', '150$');
console.log(TV);

const laptop = new ProductConsructor('Laptop', '200$');
const laptopHP = new ProductConsructor('Laptop HP', '1200$');

console.log(laptop, laptopHP);

laptop.productInfo();
laptopHP.productInfo();

for( let productValue in laptop){
    console.log(laptop[productValue]);
}

function UserConsructor(name, position, experience){
    this.name = name;
    this.position = position;
    this.experience = experience;
    UserConsructor.number++;
    if(UserConsructor.number>2){
        alert('Stop create users');
    }
}
UserConsructor.number = 0;
UserConsructor.prototype.userInfo = function () {
    console.log(`This user ${this.name} has position ${this.position} and experience ${this.experience}`);
}

const qa = new UserConsructor('Bob', 'QA', 2);

console.log(qa);

qa.userInfo();

const fed = new UserConsructor('John', 'FED', 3);

console.log(fed);

fed.userInfo();
const fed2 = new UserConsructor('John2', 'FED2', 32);



