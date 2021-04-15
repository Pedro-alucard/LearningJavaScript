// mouse events

// click (Fires when the user clicks on the primery button)
//
// dblclick(fires when the user cliks the primary mouse button twice)
//
// mousedown ( Fires when the user clicks down on any mouse button.)
//
// mouseup(Fires when the user releases a mouse button. Cannot be
// triggered by keyboard.
//
// mouseover(r Fires when the cursor was outside an element and is then
// moved inside it. (Cannot be triggered by keyboard.))
//
// mouseout(fires when the cursor is over an element, and then moves onto another element)
//
//
// mousemove(fires when the cursor is moved around an element)

var msg = '<div class=\"header\"><a id=\"close\" href=" #">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ' ;
msg += 'During this time, there may be minor disruptions to service.</div>' ;

var elNote = document.createElement('div');
elNote.setAttribute("id","note");
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dimissNote(){
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close')
elClose.addEventListener('click', dimissNote, false)

