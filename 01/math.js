let firstValue = prompt('First value'); // string
let secondValue = prompt('Second value'); // string
// let summValue = firstValue + secondValue;
// let summValue = +firstValue + +secondValue;
//let summValue =parseInt(firstValue) + parseInt(secondValue); // parseInt конвертує до цілого числа
// let summValue =parseFloat(firstValue) + parseFloat(secondValue);
let summValue =Number(firstValue) + Number(secondValue);

let numberFirstValue = Number(firstValue);
let numberSecondValue = Number(secondValue);

console.log(numberFirstValue + numberSecondValue);
console.log(numberFirstValue - numberSecondValue);
console.log(numberFirstValue / numberSecondValue);
console.log(numberFirstValue * numberSecondValue);

let productPrice = 100;
let productBprice = 120;
let productCprice = 180;
let totlPriceFiveProduct = 5*productPrice; // 500
console.log(totlPriceFiveProduct);

let totalPrice = productPrice + productBprice + productCprice;
let middlePrice = (productPrice + productBprice + productCprice)/3;
console.log(middlePrice);




