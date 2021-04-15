// MUTATION EVENTS AND OBSERVERS

// When your script adds or removes content from a
// page it is updating the DOM tree. There are many
// reasons why you might want to respond to the DOM
// tree being updated, for example, you might want to
// tell the user that the page had changed.

// DomNodeInserted() Fires when a node is inserted into the DOM tree.

// DOMNodeRemoved() Fires when a node is removed from the DOM tree.
//     e.g. using removeChild  or replaceChild .

// DOMSubtreeModified() Fires when the DOM structure changes.
//     It fires after the two events listed above occur.

// DOMNodelnsertedlntoDocument() Fires when a node is inserted into the DOM tree as a descendant of another
// node that is already in the document.

// DOMNodeRemovedFromDocument() Fires when a node is removed from the DOM tree as a descendant of another
// node that is already in the document.

var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a')
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault()
    newEl = document.createElement('li')
    newText = document.createTextNode('New list Item')
    newEl.appendChild(newText)
    elList.appendChild(newEl)
}

function updateCount(){
    listItems = list.getElementsByTagName('li').length;
    counter.innerHTML = listItems
}

addLink.addEventListener('click', addItem, false)
elList.addEventListener('DOMNodeInserted', updateCount, false)
