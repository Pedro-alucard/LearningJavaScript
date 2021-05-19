$('#exchangerates').append('<div id="rates"></div> <div id="reload"></div>');

function loadRates(){
    $.getJSON('data/ratess.json').done(function (data) {
        const day = new Date();
        const hrs = day.getHours();
        const mins = day.getMinutes();
        let msg = '<h2>Exchange Rates </h2>';
        $.each(data, function (key, value) {
            msg += '<div class="'+ key +'">' + key + ': ' + value + '</div>';
        });
        msg += '<br>Last update: ' + hrs + ':' + mins + '<br> ';
        $('#rates').html(msg);
    })
        .fail(function () {
            $('#rates').text('Sorry, we cannot load the rates')
        })
        .always(function () {
            let reload = '<a id="refresh" href="#"><img src="img/refresh.png"></a>';
            $('#reload').html(reload);
            $('#refresh').on('click', function (e) {
                e.preventDefault();
                loadRates();
            })
        })
}

loadRates();