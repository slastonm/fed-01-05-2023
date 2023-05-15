const date = new Date();
console.log(date);

// new Date(year, month, day, hour, minute, second, millisecond)

const customDate = new Date(2023, 03, 01, 06, 0, 30); // місяці починают розрахунок з 0 до 11
console.log(customDate);

const newYear = new Date(2018, 11);
console.log(newYear);

const dateFormat  = new Date();

console.log(dateFormat.toISOString(), 'ISO');
console.log(dateFormat.toDateString(), 'Date string');
console.log(dateFormat.toUTCString(), 'UTS string');

console.log(dateFormat.getMonth());
console.log(dateFormat.getFullYear());
console.log(dateFormat.getHours());
console.log(dateFormat.getMinutes());




