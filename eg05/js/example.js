var ulItem = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
ulItem.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);

ulItem.insertBefore(newItemFirst, ulItem.firstChild);


var listLi = document.getElementsByTagName('li');

for (let i = 0; i < listLi.length ; i++){
    listLi[i].className = 'cool';
}

var heading = document.querySelector('h2');
var textHeading = heading.firstChild.nodeValue;
var totalItems = listLi.length;

var newHeading = textHeading + '<span>' + totalItems + '</span>';

heading.innerHTML = newHeading;
