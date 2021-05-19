// The $.ajax() method gives you greater control over Ajax requests.
// Behind the scenes, this method is used by all of jQuery's Ajax
// shorthand methods.

//type Can take values GET or POST depending on whether the request is made using HTTP GET or POST

//url The page the request is being sent to

//data  The data that is being sent to the server with the request

//sucess A function that runs if the Ajax request completes successfully (similar to the • done () method)

//error A function that runs if there is an error with the Ajax request (similar to the . fa i 1 () method)

//beforeSend A function (anonymous or named) that is run before the Ajax request starts
// In the example on the right, this is used to trigger a loading icon

//complete A function (anonymous or named) that is run before the Ajax request starts
// In the example on the right, this is used to trigger a loading icon

//timeout The number of milliseconds to wait before the event should fail

$('nav a').on('click', function (e) {
    e.preventDefault();
    const url = this.href;
    const $content = $('#content');
    
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    $('#container').remove();
    
    $.ajax({
        type : 'POST',
        url : url,
        timeout : 2000,
        beforeSend : function () {
            $content.append('<div id="load">Loading</div>');
        },
        complete : function () {
            $('#loading').remove();
        },
        success : function (data) {
            $content.html($(data).find('#container')).hide().fadeIn(400);
        },
        fail : function () {
            $('#panel').html('<div class="loading">Please try again soon</div>')
        }
    })
})