// ATTRIBUTE NODES

//get the value of a attribute
// document.getElementById('one').getAttribute('class');

//check if the element has a specified attribute
// hasAttribute()

// sets the value of a attribute
// setAttribute

//removes an attribute from a element node
// removeAttribute()


//GET ATTRIBUTE VALUE

// var firstItem = document.getElementById('one');

// if (firstItem.hasAttribute('class') ){
//     var attr = firstItem.getAttribute('class');
// }

// var el = document.getElementById('scriptResults')
// el.innerHTML = '<p> The first Item has a class name : ' + attr + '</p>';

//CREATING E CHANGING VALUES ATTRIBUTE

// var firstItem = document.getElementById('one');
// firstItem.className = 'complete';

// var fourthItem = document.getElementsByTagName('li')[3];
// fourthItem.setAttribute('class', 'cool')

//REMOVING ATTRIBUTES

var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class') ){
        firstItem.removeAttribute('class');
    }







