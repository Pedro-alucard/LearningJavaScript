
//EFECTS

//BASIC EFFECTS
//show() Displays selected elements
// Hides() selected elements
//toggle() Toggles between showing and hiding selected elements

//FADING EFFECTS

//fadeIn() Fades in selected elements making them opaque
//fadeOut Fades out selected elements making them transparent
//fadeTo Changes opacity of selected elements
//fade Toggle Hides or shows selected elements by changing their
// opacity

//SLIDING EFFECTS

//slideUp()
//slideDown
//slideToggle()

//CUSTOM EFFECTS

// delay() Delays execution of subsequent items in queue
//stop() Stops an animation if it is currently running
//animate  Creates custom animations

//BASIC EFFECTS

// $(function (){
//     $('h2').hide().slideDown();
//     var $li = $('li');
//     $li.hide().each(function (index){
//         $(this).delay(700 * index).fadeIn(700);
//     });
//     $li.on('click', function (){
//         $(this).fadeOut(700);
//     });
// });

// ANIMATING CSS PROPERTIES

$(function (){
    $('li').on('click', function (){
        $(this).animate({
            opaticy : 0,
            paddingLeft : '+=160',
            color : '#fff'
        }, 600,'swing',function (){
            $(this).remove();
        });
    });
});
