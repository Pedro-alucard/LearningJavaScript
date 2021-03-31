
// GET ELEMENTS BY CLASS NAME

// var elements = document.getElementsByClassName('hot');
// var elements = document.getElementsByTagName('hot');
// var elements = document.querySelectorAll('hot');

// if (elements.length >= 1)
// {
// var el = elements[2];
// el.className = 'cool';
// }

//TAG NAME
var elements = document.getElementsByTagName('li');

if (elements.length >= 1)
{
var el = elements[0];
el.className = 'cool';
}

// loop nodeList

// var hotItens = document.querySelectorAll('li.hot');

// for (var i = 0; i < hotItens.length ; i++){
//     hotItens[i].className = 'cool';
// }

// or 

// for (var i = 0; i < hotItens.length ; i++){
//     hotItens[0].className = 'cool';
// }
