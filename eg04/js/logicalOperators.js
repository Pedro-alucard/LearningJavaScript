
var logicalOperators = void function(){
//true
console.log((1<2) && (2<3));
//false
console.log((1>2) && (2<3));
//true
console.log((1>2) || (2<3));
//false
console.log(!(2<3));
};

let score1 = 8;
let score2 = 8;
let pass1 = 6;
let pass2 = 6;

let passBoth = (score1>=pass1) && (score2 >= pass2);

let msg = 'both rounds passed : ' + passBoth;

var el = document.getElementById('answer');
el.textContent = msg;