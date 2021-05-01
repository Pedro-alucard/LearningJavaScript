
//CUTTING AND COPYING ELEMENTS

//Once you have a jQuery selection, you can use
// these methods to remove those elements or
// make a copy of them.

//.remove Removes matched elements from DOM tree (including any
// descendants and text nodes)

//.detach same as .remove, but keeps a copy of them in memory
//.empty removes child nodes and descendants from any elements in matched set
//.unwrap removes parents of matched set, leaving matched elements

// .clone Creates a copy of the matched set (including any
// descendants and text nodes)

$(function (){
    const $p = $('p');
    const $cloneQuote = $('p').clone();
    $p.remove();
    $cloneQuote.insertAfter('h2'); //$contentToBeInserted.insertAfter(target)

    const $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
})