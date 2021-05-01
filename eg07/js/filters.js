//ADD AND FILTER ELEMENTS IN A SELECTION

//Once you have a jQuery selection, you can add more elements to it,
// or you can filter the selection to work with a subset of the elements.


//.add() Selects all elements that contain the text specified


//filter()  Reduce the set of matched elements to those that match the selector or pass the function's test
//find() Finds descendants of elements in matched set
// that match the selector

//not() or :not() finds elements that do not match the selector
//has or :has() finds elements from the matched set that have descendant that matches the selector
// :contains() Selects all elements that contain the text
// specified

//is() checks whether current selection matches a condition

//EXAMPLE

$(function (){
    var $listItems = $('li');
    $listItems.filter(".hot:last").removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItems.each(function (){
        var $this = $(this);
        if ($this.is('.hot')){
            $this.prepend('Priority Item: ');
        }
    });
    $('li:contains("honey")').append('(local)');
});

