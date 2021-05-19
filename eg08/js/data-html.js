const xhr = new XMLHttpRequest();

//trigger the function when the server responds
xhr.onload = function () {
    if( xhr.status ===200){
        document.getElementById('content').innerHTML = xhr.responseText;
    }
}

xhr.open('GET', 'data/data.html', true);
xhr.send(null);


