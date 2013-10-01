// relatively-sticky.js by Cory Simmons -> @ccccory
(function($) {
    
    $.fn.relativelySticky = function(options) {
        
        var t = $(this),
            settings = $.extend({
                speed: 0,
                offset: 0,
                pickup: 'auto',
                cssEasing: 'ease'
            }, options),
            s = settings,
            w;
        
        t.css({
            position: 'relative',
            transition: 'all '+ s.speed +'ms '+ s.cssEasing
        });
        
        if(s.pickup === 'auto') {
            $(window).scroll(function() {
                w = $(window).scrollTop();
                if(w >= t.parent().offset().top) {
                    t.css({
                        top: w - t.parent().offset().top + s.offset
                    });
                } else {
                    t.css('top', 'auto');
                }
            });
        } else if(s.pickup === 0 ) {
            if(s.offset > 0) {
                t.css('top', s.offset);
            }
            $(window).scroll(function() {
                w = $(window).scrollTop();
                if(w >= t.parent().offset().top + s.pickup) {
                    t.css('top', w - t.parent().offset().top + s.offset);
                } else if(w < t.parent().offset().top + s.pickup) {
                    t.css('top', s.offset);
                } else {
                    t.css('top', 'auto');
                }
            });
        } else {
            if(s.offset > 0) {
                t.css('top', s.offset);
            }
            $(window).scroll(function() {
                w = $(window).scrollTop();
                if(w >= s.pickup) {
                    t.css('top', w - t.parent().offset().top + s.offset);
                } else if(w < t.parent().offset().top + s.pickup) {
                    t.css('top', s.offset);
                } else {
                    t.css('top', 'auto');
                }
            });
        }
        
    };
    
}(jQuery));