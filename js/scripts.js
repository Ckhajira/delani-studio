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
});