$(document).ready(function () {
    $(".design").click(function () {
        $("#design, .design").toggle("slow");
    });
    $("#design").click(function () {
        $(".design, #design").toggle("slow");
    });
    
});