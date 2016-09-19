$(window).scroll(function() {
    // to scroll after the first segment $('.content-section-a').first().position().top - 80
    var $nav = $('nav');
    if ($(this).scrollTop() > $('.first-section').first().position().top - 80) {
        $nav.addClass("header-scroll-full");
        $nav.removeClass("header-scroll");
    } else if ($(this).scrollTop() > 50){
        $nav.addClass("header-scroll");
        $nav.removeClass("header-scroll-full");
    } else {
        $nav.removeClass("header-scroll-full");
        $nav.removeClass("header-scroll");
    }
});
