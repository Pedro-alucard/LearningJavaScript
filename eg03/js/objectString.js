
var name3 = 'pedro, ph';
// Takes an index number as a parameter, and returns
// the character found at that position 
console.log(name3.charAt(1));
// Returns index number of the first time a character or
// set of characters is found within the string
console.log(name3.indexOf('e'));
// Returns characters found between two index
// numbers where the character for the first index
// number is included and the character for the last
// index number is not included
console.log(name3.substring(1,3));
// When a character is specified, it splits the string
// each time it is found, then stores each individual part
// ih an array 
console.log(name3.split(','));
// Like find and replace, it takes one value that should
// be found, and another to replace it (by default, it only
// replaces the first match it finds)
console.log(name3.replace('e', 'j'));



