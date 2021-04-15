// IES-8 had a different event model and did not support 
// addEventL i stener() but you can provide fallback code 
// to make event listeners work with older versions of IE.

// Using an if ••• else statement, you can check if the 
// browser supports the addEventL i stener() method. 
// The condition in the if statement will return true 
// if the browser supports the addEventL i stener() 
// method, and you can use it. 

if (el.addEventListener){
    el.addEventListener('blur', function(){
        //funcao
    },false)
}
else
{
    el.attachEvent('onblur', function(){
        //funcao
    }, false)
}

