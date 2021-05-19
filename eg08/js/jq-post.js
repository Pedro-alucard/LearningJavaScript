$('#register').on('submit', function (e) {
    e.preventDefault();

    const details = $('#register').serialize();
    console.log(details)
    $.post('register.php').done(details, function (data) {
        $('#register').html(data);
    })
})