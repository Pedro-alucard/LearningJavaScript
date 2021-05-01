//POSITION OF ELEMENTS ON THE PAGE

//The .offset() and .position() methods can
// be used to determine the position of elements
// on the page.

// .offset()  Gets or sets coordinates of the element relative to the top
// left-hand corner of the document object (1)

// .position()  Gets or sets coordinates of the element relative to any
// ancestor that has been taken out of normal flow (using
// CSS box offsets). If no ancestor is out of normal flow, it
// will return the same as .offset()

$(function (){
    const $window = $(window);
    const $slideAd = $('#slideAd');
    const endZone = $('#footer').offset().top - $window.height - 500;
 
    $window.on('scroll', function (){
        if(endZone < $window.scrollTop() ){
            $slideAd.animate({'right ': '0px' }, 250);
        }
        else{
            $slideAd.stop(true).animate({'right ': '-360px' }, 250);
        }
    });
});
