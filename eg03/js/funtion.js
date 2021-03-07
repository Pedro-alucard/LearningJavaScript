
var message = "sign up to get our newsletter for 10% off";

function updateMessage() 
{

    var elMessage = document.getElementById('message');
    elMessage.textContent = message;

}
updateMessage();


// function with return and arguments

function calculateArea(width, height)
{
var area = width * height;
return area;    
}

var wallOne = calculateArea(1,3);

function getSize(width, heigth,  depth)
{
    var area = width * depth;
    var volume = area * depth;
    
    var sizes = [area, volume];
    return sizes;
}

// getSize return a Array, the [] acess the index of array

var area = getSize(3,2,3)[0];
var areaVolume = getSize(3,2,3)[1];

// function anonymous

var area = function(width, height){
    return width * height;
};

area(2,3);

// IIFES

// the closing curly brace of the code block tell the
// interpreter to call the function immediately.

var areaOne = (function(){
var width = 3;
var height = 2;
return width  * height;
}()); 

var size = areaOne();
