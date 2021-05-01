

//EVENT METHODS

// .on()
// It adds an event listener to
// each element in the selection.

// $('li').on('click', function (){
//     $(this).addClass('complete');
// });

// JQUERY EVENTS

// UI  focus , blur, change

// KEYBOARD  input, keydown, keyup, keypress

// MOUSE
//  click, dblclick, mouseup, mousedown,
//  mouseover, mousemove, mouseout, hover*

//  FORM submit, select, change

// DOCUMENT ready* , load, unload*

// BROWSER error, resize , scroll

//EVENTS

$(function (){
    var ids = '';
    var $listItems = $('li');

    $listItems.on('mouseover click', function (){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append('<span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function (){
        $(this).children('span').remove();
    })


})






