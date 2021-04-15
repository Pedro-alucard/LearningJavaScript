//KEYBOARD EVENTS


//input (fires whem the value of an input or textarea element changes)

//keydown (fires when the user presses any key on the keyboard)

//keypress (Fires when the user presses a key that would result in a character being shown on the screen.)

//Keyup (Fires when the user releases a key on the keyboard.)

// order
//
// 1 - keydown
// 2 - keypress
// 3 - keyup


var el;
function charCount(e){
    var textEntered, charDisplay, lastKey, counter;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastKey = document.getElementById('lastKey');
    lastKey.textContent = 'last key: ' + String.fromCharCode(e.keyCode);
}

el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);