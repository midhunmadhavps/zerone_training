$(document).ready(function () {

    $("#Textarea").keyup(function () {

        var text = $("#Textarea").val();
        var len = text.length;
        if (len >= 500) {
            value = value.substring(0, 500);
        }
        else {
            $("#bnum").text(500 - len);
        }
    });
});

