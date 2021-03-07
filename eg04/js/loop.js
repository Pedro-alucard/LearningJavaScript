

for (let i = 0 ; i <= 10 ; i++)
{
console.log(i);
}

var score = [24, 32, 17];
var roundNumber = 0;
var msg = '';

for (let i = 0; i < score.length ; i++)
{
roundNumber = (i + 1);
msg += 'round ' + roundNumber + ': ';
msg += score[i] + '<br/> ';
}

document.getElementById('answer').innerHTML = msg;
