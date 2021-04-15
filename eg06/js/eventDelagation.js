// You are delegating the job of the 
// event listener to a parent of the 
// elements. In the list shown here, 
// if you place the event listener 
// on the <ul> element rather than 
// on links in each <li>element, 
// you only need one event listener. 
// This gives better performance, 
// and if you add or remove items 
// from the list it would still work 
// the same. (The code for this 
// example is shown on p269.) 


// event listneter here on ul
// <ul>
//     <li><a href="#">Link 1</a></li>
//     <li><a href="#">Link 2</a></li>
//     <li><a href="#">Link 3</a></li>
//     <li><a href="#">Link 4</a></li>
// </ul>

// preventDefault
// to prevent the default behavior of such elements

// if (event.preventDefault) {
//     event.preventDefault();
// } else {
//     event.returnValue = false;
// }

// you
// may want to stop that event
// from bubbling up to its ancestor
// elements


// stopPropagation();
//
// if (event.stopPropagation) {
//     event.stopPropagation();
// } else {
//     event.cancelBubble = true;
// }

function getTarget(e){
    if (!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}


function  itemDone(e){
    var target, elParent, elGradparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGradparent = elParent.parentNode;
    elGradparent.removeChild(elParent);

    if (e.preventDefault){
        e.preventDefault();
    }
    else{
        e.returnValue = false;
    }
}

var el = document.getElementById('shoppingList')
if (el.addEventListener){
    el.addEventListener('click',function (e){
        itemDone(e);
    }, false);
}else{
    el.attachEvent('onclick', function (e){
        itemDone(e);
    });
}





