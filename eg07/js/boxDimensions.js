//BOX DIMENSIONS

//These methods allow you to discover or update
// the width and height of all boxes on the page.

// set or retrieve

// .height() Height of box (no margin, border, padding)
// . width() width of box

// retrieve box dimensions only

// .innerHeight() Height of box plus padding
// .innerWidth() Width of box plus padding
// .outerHeight() Height of box plus padding and border
// .outerWidth() Width of box plus padding and border
// .outerHeight(true) Height of box plus padding, border, and margin
// .outerWidth(true) Width of box plus padding, border, and margin

$(function (){
    var listHeight = $('#page').height();

    $('ul').append('<p> Height :' + listHeight + 'px </p>');

    $('li').width('50%');

    // $('li#one').width(100);
    // $('li#two').width('75%');
});

// . scrollLeft () Gets the horizontal position of the scroll bar for the first
// element in the jQuery selection, or sets the horizontal
// scroll bar position for matched nodes


//.scrollTop()  Gets the vertical position of the scroll bar for the first
// element in the jQuery selection, or sets the vertical
// scroll bar position for matched nodes