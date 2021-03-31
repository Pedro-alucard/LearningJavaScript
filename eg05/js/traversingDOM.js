
// var firstItem = document.getElementById('two');
// var prevItem = firstItem.previousSibling;
// var nextItem = firstItem.nextSibling;

// prevItem.className = 'complete';
// nextItem.className = 'cool';

var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.className = 'complete'; 
lastItem.className = 'cool';


// acess text from node
// nodeValue 