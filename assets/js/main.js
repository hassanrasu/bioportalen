(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $('.hero-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            fade: true,
            autoplay: true,

        });



        $(".mainmenu ul li:has(ul)").addClass("has-submenu");
        $(".mainmenu ul li:has(ul)").addClass("small-submenu");
        $(".mainmenu ul li ul").addClass("sub-menu");
        $(".mainmenu ul.dropdown li").hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });

        var $menu = $("#menu"),
            $menulink = $("#menu-toggle"),
            $menuTriggercont = $(".header-toggle"),
            $searchToggle = $(".search_toggle"),
            $menuTrigger = $(".has-submenu > a");
        $menulink.click(function (e) {
            $menulink.toggleClass("active");
            $menu.toggleClass("active");
            $menuTriggercont.toggleClass("active");
        });

        $searchToggle.click(function (e) {
            $('.search').toggleClass("active");;
        });

        $menuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this);
            t.toggleClass("active").next("ul").toggleClass("active")
        });

        $(".mainmenu ul li:has(ul)");


        $(window).on('load', function () {
            $('.pageLoader').fadeOut('1000', function () {
                $(this).remove();
            });
        });

    });



}(jQuery));

