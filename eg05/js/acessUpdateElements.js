// acess text from node
// nodeValue 

// document.getElementById('one').firstChild.nextSibling.nodeValue;

// ACESS AND UPDATE THE CONTENT WITH NODEVAULE

// var itemTwo = document.getElementById('two');
// var elText = itemTwo.firstChild.nodeValue;
// elText = elText.replace('pine nuts', 'kale');
// itemTwo.firstChild.nodeValue = elText;

// ACESS AND UPDATE THE CONTENT WITH TEXTCONTENT(innerText)
//TEXTCONTENT
// To collect the text from the
// <l i> elements in our example
// (and ignore any markup inside
// the element) 

//innerText
//textContent returns the text content of all elements, while innerText returns the content of all elements, except for <script> and <style> elements.

var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

console.log(showInnerText);

 var msg = '<p>textContent: ' + showTextContent + '</p>';
 msg += '<p>innerText: ' + showInnerText + '</p>';
 var el = document.getElementById('scriptResults');
 el.innerHTML = msg;

 firstItem.textContent = 'sourdough bread';


