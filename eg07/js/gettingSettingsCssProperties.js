

//GETTING AND SETTING CSS PROPERTIES

// .css()

//get a css property
//will set the background color of all items
//var background  = $('li').css('background-color');

//how to set a css property

// $('li').css('background-color', '#272727');

// increase e decrease

// $('li').css('padding-left', '+=20');

//setting mutiple properties

// $('li').css({
//     'background-color': '#272727',
//     'font-family': 'Courier'
// });

$(function(){
    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was:' + backgroundColor + '</p>');
    $('li').css({
        'background-color':'#c5a996',
        'border':'1px solid #fff',
        'color':'#000',
        'font-family':'Georgia',
        'padding-left':'+=75'
    });
});