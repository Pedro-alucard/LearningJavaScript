//FORM EVENTS

//submit(When a form is submitted, the submit
// event fires on the node representing the
// <form> element)

//change ( Fires when the status of several form
// elements change. For example, when:
// • a selection is made from a drop-down
// select box )

// input (The input event. which you saw on the
// previous page is commonly used with
//<input> and <textarea> elements)

var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;

elForm = document.getElementById('formSignup')
elSelectPackage = document.getElementById('package')
elPackageHint = document.getElementById('packageHint')
elTerms = document.getElementById('terms')
elTermsHint = document.getElementById('termsHint')

function packgeHint(){
    var package = this.options[this.selectedIndex].value;

    if(package == 'monthly'){
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year'
    }
    else{
        elPackageHint.innerHTML = 'wise choice'
    }
}

function checkTerms(event){
    if(!elTerms.checked){
        elTermsHint.innerHTML = 'you must agree to the terms'
        event.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false)
elSelectPackage.addEventListener('change', packgeHint, false)
