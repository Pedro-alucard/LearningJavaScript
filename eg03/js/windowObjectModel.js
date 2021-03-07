
// The browser object model creates a model of the browser or window
// the topmost object is the window object , witch represent current browser window or tab 
// window -> document, history, location, navigator, screen.


// Document object model(DOM) creates a model of current web page,
// document -> html -> body, head -> title, div

//tell you the date that the page was last updated
// document.lastModified;

// make all the letters in uppercase
// var lastName = 'rhazek';
// lastName.toUpperCase();


// window.innerHeight (Height of window (excluding browser chrome/user interface) (in pixels))
// window.innerWidth (Width of window (excluding browser chrome/user interface) (in pixels) )
// window.pageXOffset (Distance document has been scrolled horizontally (in pixels)) 
// window.pageYOffset (Distance document has been scrolled vertically (in pixels))
// window.screenX (X-coordinate of pointer, relative to top left corner of screen (in pixels))
// window.screenY (Y-coordinate of pointer, relative to top left corner of screen (in pixels)) 
// window.location (Current URL of window object (or local file path))
// window.document (Reference to document object, which is used to represent the current page
// contained in window)
// window.history (Reference to history object for browser window or tab, which contains details
// of the pages that have been viewed in that window or tab)
// window.history.length (Number of items in hi story object for browser window or tab) 
// window.screen (Reference to screen object)
// window.screen.width (Accesses screen object and finds value of its width property (in pixels))
// window.screen.height (Accesses screen object and finds value of its height property (in pixels) )

//METHODS

// window.alert()  Creates dialog box with message (user must click OK button to close it)
// window.open()  Opens new browser window with URL specified as parameter
// window.print() Tells browser that user wants to print contents of current page

var msg = '<h2> browser window</h2><p> width :' + window.innerWidth + '</p>'
msg += '<p>height' + window.innerHeight + '</p>'
msg += '<h2>history</h2><p> items : ' + window.history.length + '</p>'
msg += '<h2>screen</h2><p> width : ' + window.screen.width + '</p>'
msg += '<p>heigth : ' + window.screen.height + '</p>'

var el = document.getElementById('info');
el.innerHTML = msg;
alert('current page location' + window.location);