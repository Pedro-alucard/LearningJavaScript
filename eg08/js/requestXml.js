const xhr = new XMLHttpRequest();
xhr.open('GET', 'data/tete.json', true);
xhr.send('search=arduino');

//response

xhr.onload = function () {
    if(xhr.status === 200){
        //code
    }
}