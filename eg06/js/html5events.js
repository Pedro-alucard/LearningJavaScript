//HTML5 EVENTS

// DOMContentLoaded() Event fires when the DOM tree is formed (img, CSS, and
// JavaScript might still be loading). Scripts start to run earlier than
// using the load event which waits for other resources such as
// img and advertisements to load.

// hashchange() Event fires when the URL hash changes (without the entire
// window refreshing)

// beforeunload() Event fires on the window object before the page is unloaded. It
// should only be used to help the user (not to encourage them to
// stay on a website if they are trying to leave).

function setup(){
    var textInput;
    textInput = document.getElementById('message')
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function (event){
    event.returnValue = 'sasdasdasdas';
}, false);
