var msg;


var checkScore = (void function(score){
    if (score >= 50){
        msg = 'congratulations, you passed';
    }
    else
    {
        msg = 'you dint pass :(';
    }
}(75));

var el = document.getElementById('answer');
el.textContent = msg;