$(document).ready(function(){
    
    // set a duration for all tweens
    var globalTweenTime = 1.2;
    var navHeight = $('#newsfeed-wrapper nav').height();

    // init Scroll Magic controller
    // only one controller is needed per scroll container (default container: window)
    var scrollController = new ScrollMagic.Controller();

    // changes behaviour of controller from instant jump to animated scroll
    scrollController.scrollTo(function (newpos, scrollduration) {

        // if back to top, no nav height offset
        if (newpos == 0) {
            var offset = 0;
        } else {
            var offset = navHeight;
        };
         
        // animate scroll
        // autoKill: false prevents a safari/iOS bug
        // http://greensock.com/forums/topic/7205-scrollto-bug-in-182-in-safari-602-mountain-lion/page-2
        TweenLite.to(window, scrollduration, {
            scrollTo: {y: (newpos - offset), autoKill: false}, 
            ease: Power3.easeInOut
        });

    });

    // bind scroll to anchor links
    // this regex matches all hrefs that are '#'
    $(document).on("click", "a[href='#']", function (e) {
        e.preventDefault();
        
        var id = $(this).attr("href");

        // back to top
        if (id == '#') {
            scrollController.scrollTo(0, globalTweenTime);
        }

        // if element with id exists 
        if ($(id).length > 0) {
            scrollController.scrollTo(id, globalTweenTime);
        }

    });

});