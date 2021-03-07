
// document.title
// document.lastModified
// document.URL Strign containing url of current document
// document.domain returns domain of current document

// document.write() writes text to document
// document.getElementById() Returns element, if there is an element with the value of the id attribute
// that matches
// document.querySelectorAll() Returns list of elements that match a CSS selector, which is specified as
// a parameter 
// document.createElement()
// document.createTextNode()

var msg = '<p><b>page tittle : </b>' + document.title + '<br/>';
msg += '<p><b>last modified : </b>' + document.lastModified + '<br/>';
msg += '<p><b>adress : </b>' + document.URL + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;
