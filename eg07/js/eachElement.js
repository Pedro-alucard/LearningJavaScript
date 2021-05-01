
//WORKING WITH EACH ELEMENT IN A SELECTION

// .each()
//this or $(this)

// $('li').each(function (){
//     var ids = this.id;
//     $(this).append('<em class="order">' + ids +'</em>');
// })

// 1. The jQuery selection contains all of the <li> elements.
// 2 .. each () applies the same code to each element in the selection.
// 3. An anonymous function is run for each of the items in the list.

$(function (){
    $('li').each(function (){
        var ids = this.id;
        $(this).append('<span class="order">' + ids + '</span>');
    });
});