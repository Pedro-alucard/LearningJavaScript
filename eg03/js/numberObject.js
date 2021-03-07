var number = 10.2344;
console.log(number);

// Rounds to specified number of decimal places (returns a string)
number = number.toFixed(3);
console.log(number);

number = parseFloat(number);
// Rounds to total number of places (returns a string)
number = number.toPrecision(3);
console.log(number);

// Rounds number to the nearest integer
Math.round(number); 

var randonNumber = Math.floor(Math.random() * 10);
console.log(randonNumber);




