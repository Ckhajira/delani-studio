$(document).ready(function () {
    $(".design-image").click(function () {
        $(".design-text, .design-image").toggle();
    });
    $(".design-text").click(function () {
        $(".design-image, .design-text").toggle();
    });
    $(".development-image").click(function () {
        $(".development-text, .development-image").toggle();
    })
    $(".development-text").click(function () {
        $(".development-image, .development-text").toggle();
    })
    $(".product-management-image").click(function () {
        $(".product-management-text, .product-management-image").toggle();
    })
    $(".product-management-text").click(function () {
        $(".product-management-image, .product-management-text").toggle();
    })
    $('.portfolio-1').mouseover(function () {
        $('.portfolio-1-mask').show();
    }).mouseout(function () {
        $('.portfolio-1-mask').hide();
    });
    $('.portfolio-2').mouseover(function () {
        $('.portfolio-2-mask').show();
    }).mouseout(function () {
        $('.portfolio-2-mask').hide();
    });
    $('.portfolio-3').mouseover(function () {
        $('.portfolio-3-mask').show();
    }).mouseout(function () {
        $('.portfolio-3-mask').hide();
    });
    $('.portfolio-4').mouseover(function () {
        $('.portfolio-4-mask').show();
    }).mouseout(function () {
        $('.portfolio-4-mask').hide();
    });
    $('.portfolio-5').mouseover(function () {
        $('.portfolio-5-mask').show();
    }).mouseout(function () {
        $('.portfolio-5-mask').hide();
    });
    $('.portfolio-6').mouseover(function () {
        $('.portfolio-6-mask').show();
    }).mouseout(function () {
        $('.portfolio-6-mask').hide();
    });
    $('.portfolio-7').mouseover(function () {
        $('.portfolio-7-mask').show();
    }).mouseout(function () {
        $('.portfolio-7-mask').hide();
    });
    $('.portfolio-8').mouseover(function () {
        $('.portfolio-8-mask').show();
    }).mouseout(function () {
        $('.portfolio-8-mask').hide();
    });
});