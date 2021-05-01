
//finding items by order

// Each item returned by a jQuery selector is given
// an index number, which can be used to filter
// the selection.

// .eq() The element that matches the index number(equal)
// :lt() Elements with an index less than the number(less than)
// specified
//gt() Elements with an index greater than the number specified (greater than)

 // index :0 <li id="one" className="hot"><em>fresh</em> figs</li>
 // index :1<li id="two" className="hot">pine nuts</li>
 // index :2<li id="three" className="hot">honey</li>
 // index :3<li id="four">balsamic vinegar</li>

$(function (){
    $('li:lt(2)').removeClass('hot');
    $ ('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool')
})