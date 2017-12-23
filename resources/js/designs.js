
$(document).ready(function(){

    $(".submenu").on("mouseenter", function() {
        $(this).find(".dropdown-submenu").toggleClass("active");
    });

    $(".submenu").on("mouseleave", function() {
        $(this).find(".dropdown-submenu").toggleClass("active");
    });

});