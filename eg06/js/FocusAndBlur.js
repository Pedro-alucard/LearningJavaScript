// FOCUS AND BLUR

function checkUsername() {
    var sizeUserName = elInputUsername.value
    if (sizeUserName.length < 5) {
        elMsg.className = 'warning'
        elMsg.innerText = 'not long enough'
    } else {
        elMsg.textContent = ''
    }
}

function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'userName must be at least 5 characters'
}

var elInputUsername = document.getElementById('username')
var elMsg = document.getElementById('feedback')

elInputUsername.addEventListener('focus', checkUsername, false)
elInputUsername.addEventListener('blur', tipUsername, false)