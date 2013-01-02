(function( $ ) {
  
window.LazyTemplates = {
    init: function(){
        LazyTemplates.wrapTemplates();
        LazyTemplates.loadVisible();
        $(window).on("resize", LazyTemplates.loadVisible);
        $(window).on("scroll", LazyTemplates.loadVisible)
    },

    setWidth: function (_targetElem, _width) {
        $(_targetElem).parent().css("width", _width)
    },
  
    setHeight: function (_targetElem, _height) {
        $(_targetElem).parent().css("height", _height)
    },
  
    setCallback: function (_targetElem, _callback) {
        if ("string" == typeof _callback) $(_targetElem).data("callback", window[_callback]);
        else if ("function" == typeof _callback) $(_targetElem).data("callback", _callback);
        else throw "invalid callback provided";
    },
  
    loadVisible: function () {
        $(".lazy-wrapper").each(function () {
            LazyTemplates.elementInViewport(this) && LazyTemplates.loadContent($(this).children().first());
        })
    },
  
    loadContent: function (_targetElem) {
        $(_targetElem).parent().before($(_targetElem).html());
      
        var callback = $(_targetElem).data("callback");
        "function" == typeof callback && setTimeout(function () {callback();}, 0);
      
        $(_targetElem).parent().remove()
    },
  
    wrapTemplates: function () {
        $("script.lazy").each(function () {
            $(this).wrap('<div class="lazy-wrapper">');
          
            var callback = $(this).attr("data-callback");
            "undefined" != typeof callback && LazyTemplates.setCallback(this, callback);
          
            var width = $(this).attr("data-width");
            "undefined" != typeof width && LazyTemplates.setWidth(this, width);
          
            var height = $(this).attr("data-height");
            "undefined" != typeof height && LazyTemplates.setHeight(height);

        })
    },
  
    elementInViewport: function(_targetElem) {
        var top    = _targetElem.offsetTop,
            left   = _targetElem.offsetLeft,
            width  = _targetElem.offsetWidth,
            height = _targetElem.offsetHeight;

        while(_targetElem.offsetParent) {
          _targetElem    = _targetElem.offsetParent;
          top  += _targetElem.offsetTop;
          left += _targetElem.offsetLeft;
        }

        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
      }

};

})( jQuery );
