

//GETTING AND SETTING ATTRIBUTES VALUES
//
//.attr()
//.removeAttr()
//.addClass()
//.removeClass()

//retrieves

// $('li#one').attr('id');
//
// //updates
//
// $('li#one').attr('id' , 'hot');
//
// .removeAttr()
// $('li#one').removeAttr('id');

$(function (){
    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id', 'group');
});
