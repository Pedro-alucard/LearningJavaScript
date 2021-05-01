
//FUNCTION JQuery finds one or more elements in the page
//jQuery() or  $()

$(':header').addClass('headLine');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function (){
    $(this).remove();
});