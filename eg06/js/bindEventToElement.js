// Ways to bind an event 

// bad practice : html event handlers <a onclick="hide()"> 

// function checkUsername(){
//     var elMsg = document.getElementById('feedback');
//     var elUsername = document.getElementById('username');

//     if(elUsername.value.length < 5){
//         elMsg.textContent = 'Username must be 5 charecters or more';
//     }
//     else
//     {
//         elMsg.textContent = '';
//     } 
// }

// traditional dom event handlers :  can only attach a single function 
// to any event

// function checkUsername(){
//     var elMsg = document.getElementById('feedback');

//     if(elUsername.value.length < 5){
// or this.value.length
//         elMsg.textContent = 'Username must be 5 charecters or more';
//     }
//     else
//     {
//         elMsg.textContent = '';
//     } 
// }
// var elUsername = document.getElementById('username');
// elUsername.onblur = checkUsername;

// DOM level 2 event listeners : As a result, there 
// are less likely to be conflicts 
// between different scripts that 
// run on the same page. 

function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if (elUsername.value.length < 5) {
        // or this.value.length
        elMsg.textContent = 'Username must be 5 charecters or more';
    }
    else 
    {
        elMsg.textContent = '';
    }
}
var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);

// remover um event listener : removeEventListener()

// USING PARAMETERS WITH EVENTE LISTENERS E HANDLERS

// elUsername.addEventListener('blur', function(){
// checkUsername(5);
// }, false);

