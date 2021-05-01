
//GETTING ELEMENT CONTENT
// retrieve and update content of elements

// .html()
// .text()

// $('ul').html();

 //WILL RETURN
// <li id="one"><em>fresh</em> figs</li>
// <li id="two">pine nuts</li>
// <li id="three">honey</li>
// <li id="four">balsamic vinegar</li>

// $('li').html();

//WILL RETURN
// <em>fresh</em> figs


// $('ul').text();


//WILL RETURN
// fresh figs
// pine nuts
// honey
// balsamic vint;!gar

// $('li').text();

//WILL RETURN
//fresh figspine nutshoneybalsamic vinegar


// var $ulHtml = $('ul').html();
// $('ul').append($ulHtml);

// var $ulText = $('ul').text();
// $('ul').append('<p>' + $ulText + '</p>');

// var $ulItemHtml = $('li').html();
// $('li').append('<i>' + $ulItemHtml + '</i>');

var $ulItemNext = $('li').text();
$('li').append('<i>' + $ulItemNext + '</i>')

