
// THE INNERHTML PORPERTY
//UPDATE AND TEXT MARKUP

// var firstItem  = document.getElementById('one');
// var itemContent = firstItem.innerHTML;
// firstItem.innerHTML = '<a href="#">' + itemContent + '</a>';


///////////////////////////////////////////////////////

// DOM MANUPULATION METHODS
//ADDING ELEMENT


// You start by creating a new
// element node using the
// createElement()

// liItem = createElement();

// createTextNode creates a new text Node. it can be added to the element
// node using the appendChild() method

// textItem = createTextNode();
// appendChild();

// var newEl = document.createElement('li');
// var newText = document.createTextNode('quinoa');
// newEl.appendChild(newText);
// var position = document.getElementsByTagName('ul')[0];
// position.appendChild(newEl);

//REMOVING ELEMENT

// removeChild()

var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

//COMPARING TECHNIQUES : UPDATING HTML CONTENT


// The document object's write () method is a simple
// way to add content that was not in the original
// source code to the page, but its use is rarely advised.

//documento.write();

// The i nnerHTML property lets you get/update the
// entire content of any element (including markup) as
// a string. 

// element.innerHtml

//DOM MANIPULATION 
// DOM manipulation refers to using a set of methods
// and properties to access, create, and update
// elements and text nodes. 

