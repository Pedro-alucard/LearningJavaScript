
//THE EVENT OBJECT

//methods e properties

//which Button or key that was pressed

//data An object literal containing extra information
// passed to the function when the event fires

//target DOM element that initiated the event

//pageX Mouse position from left edge of viewport

//pageY Mouse position from top of viewport

// timeStamp Number of milliseconds from Jan 1st, 1970,
// to when the event was triggered

//preventDefault() Prevents the default
//stopPropagation() Stops the event bubbling up to ancestors


// $('li').on('click', function (event){
//     eventType = event.type;
// })

// $(function (){
//     $('li').on('click', function (e){
//         $('li span').remove();
//         var date = new Date();
//         date.setTime(e.timeStamp);
//         var clicked = date.toDateString();
//         $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>')
//     });
// });

//WITH PAREMETERS

// . on(events[,selector][, data], function(e));

// the selector will to respond to the event happening on a subset of elements in the initial jQuery selection
// data, you can pass extra information to the function that is called when the event is triggered

$(function (){
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)', // will filter the descendants with id: four
        {status:'important'}, //extra information that you can retrieve with the event object
        function (e){
            $('#notes').remove();
            listItem = 'Item : ' + e.target.textContent + '<br/>';
            itemStatus = 'Status ' + e.data.status + '<br/>';
            eventType = 'Event: ' + e.type;
            $(this).parent().after('<p id="notes">Salve</p>');
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
})