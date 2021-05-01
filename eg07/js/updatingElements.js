

//UPDATING ELEMENTS

// When the html() and . text ()
// methods are used as setters (to
// update content) they will replace
// the content of each element in
// the matched set (along with any
//     content and child elements).

// .html()
// .text()

// The .replaceWith () and
//     .remove() methods replace and
// remove the elements they match
// (as well as their content and any
// child elements).

// .replaceWith()
// .remove()


$(function (){
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function (){
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});
