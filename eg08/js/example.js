$(function (){
    let times;

    $.ajax({
        beforeSend : function (xhr) {
            if(xhr.overrideMimeType()){
                xhr.overrideMimeType("application/json")
            }
        }
    });

    function loadTimetable() {
        $.getJSON('data/example.json')
            .done(function (data) {
                times = data;
            })
            .fail(function () {
                $('#event').html('Sorry, we could not load the timetable at the moment ')
        });
    }
    loadTimetable();

    $('#content').on('click', '#event a', function (e) {
        e.preventDefault();

        const loc = this.id.toUpperCase();
        let newContent = '';
        for (let i = 0; i < times[loc].length ; i++) {
            newContent += '<li><span class="time">' + times[loc][i].time  + '</span>'
            newContent += '<a href="descriptions.html#';
            newContent += times[loc][i].title.replace(/ /g, '-') + '">';
            newContent += times[loc][i].title + '</a></li>';
        }
        $('#sessions').html('<ul>' + newContent + '</ul>');

        $('#event a.current').removeClass('current');
        $(this).addClass('current');
        $('#details').text('');
    });

    $('#content').on('click', '#sessions li a', function (e) {
        e.preventDefault();
        let fragment = this.href;
        fragment = fragment.replace('#', ' #');
        console.log(fragment);
        $('#details').load(fragment);

        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');
    });

    $('nav a').on('click', function (e) {
        e.preventDefault();

        const url = this.href;

        $('nav a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#content').load(url + ' #container').hide().fadeIn('slow');
    })
})