$(document).ready(function () {
    $(".design-image").click(function () {
        $(".design-text, .design-image").toggle();
    });
    $(".design-text").click(function () {
        $(".design-image, .design-text").toggle();
    });

});