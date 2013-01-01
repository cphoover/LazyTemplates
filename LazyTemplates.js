(function( $ ) {

var LazyTemplates = {};

LazyTemplates.loadVisible = function(){

   $('.lazy-wrapper').each(function(){  
      if(LazyTemplates.elementInViewport(this)){
               LazyTemplates.loadContent($(this).children().first());
       }                
           
   });
};
    
LazyTemplates.loadContent = function(_targetElem){
   $(_targetElem).parent().before($(_targetElem).html());
   $(_targetElem).parent().remove();
};
    
LazyTemplates.wrapTemplates = function(){
    $('script.lazy').each(function(){  
         $(this).wrap('<div class="lazy-wrapper">');                    
    });
};  
    
LazyTemplates.elementInViewport = function(el) {
  var top    = el.offsetTop,
      left   = el.offsetLeft,
      width  = el.offsetWidth,
      height = el.offsetHeight;

  //check the parents positioning...
  while(el.offsetParent) {
    el    = el.offsetParent;
    top  += el.offsetTop;
    left += el.offsetLeft;
  }

  //Make sure it is within the 
  //bottom  (y offset + height) right  (x offset + width)
  //and  top (y offset ) left(x offset) of viewport
  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
};
    
    
$(document).ready(
    function(){
        LazyTemplates.wrapTemplates();
        LazyTemplates.loadVisible();

        $(window).on('resize', LazyTemplates.loadVisible);
        $(window).on('scroll', LazyTemplates.loadVisible);
 });

})( jQuery );
