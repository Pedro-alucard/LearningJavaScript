//TRAVERSING THE DOM

//When you have made a jQuery selection, you
// can use these methods to access other element
// nodes relative to the initial selection.

// find() All elements within current selection that match selector
//closest() Nearest ancestor (not just parent) that matches selector

//parent() Direct parent of current selection
//parents All parents of current selection
//children() All children of current selection
//siblings() All siblings of current selection
//next() Next sibling of current element
//nextAll() All subsequent siblings of current element
//prev() Previous sibling of current element
//prevAll() All previous siblings of current element

$(function (){
    $('ul').hide();
    var $h2 = $('h2');
    $h2.append('<span> Show </span>');

    $h2.on('click', function (){
        $h2.next()
            .fadeIn()
            .children('.hot')
            .addClass('favorite');
        $h2.find('span').fadeOut();
    });
});