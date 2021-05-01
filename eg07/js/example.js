$(function (){

    let $list, $newItemForm, $newItemButton;
    let item = '';
    $list = $('ul');

    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $('li').hide().each(function (index){
        $(this).delay(index * 450).fadeIn(1600);
    });

    function updateCount(){
        const items = $('li[class!=complete]').length;
        $('#counter').text(items);
    }

    updateCount();

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function (){
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e){
        e.preventDefault();
        const $textArea = $('input:text');
        const text = $textArea.val();
        $list.append('<li>' + text + '</li>')
        $textArea.val('');
        updateCount();
    });

    $list.on('click','li', function (){
        const $this = $(this);
        const complete = $this.hasClass('complete');

        if (complete == true){
            $this.animate({
                opacity : 0.0,
                paddingLeft : '+=180'
            }, 500, 'swing', function (){
                $this.remove();
            });
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class = \"complete\">' + item + '</li>')
                .hide()
                .fadeIn(300);
            updateCount();
        }
    });
});