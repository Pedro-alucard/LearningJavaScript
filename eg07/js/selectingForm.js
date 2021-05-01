
//SELECTING FORM ELEMENTS

// :button <button> and <input> elements whose type attribute has
// a value of button

// :checkbox <input> elements whose type attribute has a value of
// checkbox. Note that you get better performance with
//     $('(type="checkbox"]')

// :checked Checked elements from checkboxes and radio buttons

// :disable  Checked elements from checkboxes and radio buttons

// :enabled Checked elements from checkboxes and radio buttons

// :focus Element that currently has focus. Note that you get better
// performance with$ (document. active Element)

// :file All elements that are file inputs

// :image  All image inputs. Note that you get better performance
// using (type="image"]

// :input All <button>, <input>. <select>, and <text area>
//     elements. Note that you get better performance from
//     selecting elements, then using  .filter (":input")

// :password All password inputs. Note that you get better performance
// using

// :radio All radio inputs. To select a group of radio buttons, you can
// use
// :reset All inputs that are reset buttons

// :selected All elements that are selected.

// :submit <button> and <input> elements whose type attribute
// has a value of submit.

// :text Selects <input> elements with a type attribute whose
// value is text, or whose type attribute is not present

//.val Primarily used with <input>, <select>, and <text area>
// elements. It can be used to get the value of the first element
// in a matched set, or update the value of all of them.

//.filter()
//is()
//.isNumeric  Checks whether the value represents a numeric value
// and returns a Boolean.

// change when the value of an input changes
// select when the option for a <select> element is changed
// submit when a form a submitted

$(function (){
    const $newItemButton = $('#newItemButton');
    const $newItemForm = $('#newItemForm');
    const $textInput = $('input:text')

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function (){
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e){
        e.preventDefault();
        const newText = $('input:text').val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemForm.show();
        $textInput.val('');
    });
});








