
//INSERTING ELMENTS

// append()
// prepend()
// before()
// after()

// (before) <li> prepend item (append) </li> (after)

//creates a jQuery object with a empty li

// var $newFragment = $('<li>');

//creates jQuery object that contains li element with a class e some text

// var $newltem = $('<li class="new">item</li>');

$(function (){
    $('ul').before('<p class="notice"> just updated</p>>');
    $('li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);
});


