$(document).ready(function () {
    $("p").css("fontSize", 10);
    $("#small").click(function () {
        $("p").css("fontSize", 7);
    });
    $("#normal").click(function () {
        $("p").css("fontSize", 10);
    });
    $("#large").click(function () {
        $("p").css("fontSize", 16);
    });
    $("#blue").click(function () {
        $("p").css('color', 'blue');
    });
    $("#black").click(function () {
        $("p").css('color', 'black');
    });
    $("#orange").click(function () {
        $("p").css('color', 'orange');
    });
});