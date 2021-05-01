
//CHAINING

//the process of placing several methods in the same selector is referred to as chaining

// $('li[id !="one"]').hide().delay(500).fadeIn(1400);

$('li:not("#one")')
    .hide()
    .delay(500)
    .fadeIn(1400);