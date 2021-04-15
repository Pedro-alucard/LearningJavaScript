//PROPERTY
// target The target of the event (most specific element interacted with) 
// type Type of event that was fired 
// cancelable Whether you.can cancel the default behavior of an element



//METHOD
// preventDefault() Cancel default behavior of the event (if it can be canceled) 
// stopPropagation() Stops the event from bubbling or capturing any further


//EVENT LISTNETER WITH NO PARAMETERS

// function checkUsername(e) {
//     var target = e.target;
// }

// var el = document.getElementById('username')
// el.addEventListener('blur', checkUsername, false)

//EVENT LISTNETER WITH PARAMETERS

// function checkUsername(e, minLegth) {
//     var target = e.target;
// }

// var el = document.getElementById('username')
// el.addEventListener('blur', function (e) {
//     checkUsername(e, 5);
//     }, false)



// THE EVENT OBJECT IN IE5-8

// function checkUsername(e){
//     if (!e){
//         e = window.event();
//     }
//     var target = e.target || e.srcElement;
//     return target;
// }


function checkLength(e, minLength) {
    var el, elMsg;
    if (!e){
        e = window.Event();
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;
    if (el.value.length < minLength) {
        elMsg.innerText = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMsg.innerText = '';
    }
}
var elUsername = document.getElementById('username')
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function (e) {
        checkLength(e, 5)
    }, false);
}
else
{
    elUsername.attachEvent('onblur', function (e) {
        checkLength(e, 5)
    }, false);
}



