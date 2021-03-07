var number = 5;

switch (number) {

    case 1:
        console.log('a');
        break;
    case 2:
        console.log('b');
        break;
    default:
        console.log('c');
}

var artist = '' ;
var artistA = (artist || 'Unknown'); 
console.log(artistA);